import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Loader2, Check, X, RotateCcw, Edit2, Save } from 'lucide-react';
import { Button } from '../../ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../../ui/dialog';
import { Textarea } from '../../ui/textarea';
import { toast } from 'sonner';
import { getOpenApiMessage } from '../../../services/openai';
import { TOAST_MESSAGES } from '../../../constants/constant';
import { useI18n } from '../../../hooks/useI18n';

interface AIAssistantProps {
  fieldName?: string;
  fieldLabel: string;
  currentValue: any;
  onAccept: (suggestion: string) => void;
  onCurrentValueChange?: (newValue: string) => void; // New prop for updating current value
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AIAssistant({
  fieldLabel,
  currentValue,
  onAccept,
  onCurrentValueChange,
  isOpen,
  onOpenChange,
}: AIAssistantProps) {
  const { t } = useI18n();
  const [isGenerating, setIsGenerating] = useState(false);
  const [suggestion, setSuggestion] = useState('');
  const [editedSuggestion, setEditedSuggestion] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  // New states for editing current value
  const [isEditingCurrentValue, setIsEditingCurrentValue] = useState(false);
  const [editedCurrentValue, setEditedCurrentValue] = useState(currentValue || '');
  const [tempEditValue, setTempEditValue] = useState(''); // Temporary value for editing

  const handleGenerate = async (valueToGenerate?: string) => {
    setIsGenerating(true);
    setSuggestion('');
    setEditedSuggestion('');
    setIsEditing(false);

    try {
      const inputValue = valueToGenerate || currentValue;
      const result = await getOpenApiMessage(inputValue);
      setSuggestion(result);
      setEditedSuggestion(result);
    } catch (error) {
      toast.error(t('ai.error'));
    } finally {
      setIsGenerating(false);
    }
  };

  const handleAccept = () => {
    const finalText = isEditing ? editedSuggestion : suggestion;
    onAccept(finalText);
    onOpenChange(false);
    toast.success(t(TOAST_MESSAGES.suggestionAccepted));
  };

  const handleDiscard = () => {
    setSuggestion('');
    setEditedSuggestion('');
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  // New handlers for editing current value
  const handleEditCurrentValue = () => {
    setIsEditingCurrentValue(true);
    setEditedCurrentValue(currentValue || '');
  };

  const handleSaveCurrentValue = async () => {
    if (onCurrentValueChange) {
      onCurrentValueChange(editedCurrentValue);
    }
    setIsEditingCurrentValue(false);

    // Generate new AI suggestion based on edited current value
    if (editedCurrentValue.trim()) {
      await handleGenerate(editedCurrentValue);
    }

    toast.success(t('ai.current_value_updated'));
  };

  const handleCancelEditCurrentValue = () => {
    setIsEditingCurrentValue(false);
    setEditedCurrentValue(currentValue || '');
  };

  React.useEffect(() => {
    if (isOpen) {
      setSuggestion('');
      setEditedSuggestion('');
      setIsEditing(false);
      setIsEditingCurrentValue(false);
      setTempEditValue('');
      handleGenerate();
    }
  }, [isOpen, fieldLabel]);

  // Update editedCurrentValue when currentValue changes from parent
  React.useEffect(() => {
    setEditedCurrentValue(currentValue || '');
  }, [currentValue]);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Sparkles className="h-5 w-5 text-blue-500" />
            <span>{t('ai.help_me_write')}</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">{fieldLabel}</h3>
            {currentValue && (
              <div className="p-3 bg-muted rounded-lg relative group">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">{t('ai.current_value')}</p>
                    {isEditingCurrentValue ? (
                      <div className="space-y-2">
                        <Textarea
                          value={editedCurrentValue}
                          onChange={(e) => setEditedCurrentValue(e.target.value)}
                          className="min-h-[80px]"
                          placeholder={t('ai.edit_current_value_placeholder')}
                        />
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            onClick={handleSaveCurrentValue}
                            disabled={isGenerating}
                          >
                            <Save className="h-3 w-3 mr-1" />
                            {t('ai.save')}
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={handleCancelEditCurrentValue}
                          >
                            {t('ai.cancel')}
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm">{currentValue}</p>
                    )}
                  </div>

                  {!isEditingCurrentValue && (
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={handleEditCurrentValue}
                      className="opacity-0 group-hover:opacity-100 transition-opacity ml-2 h-8 w-8 p-0"
                      title={t('ai.edit_current_value')}
                    >
                      <Edit2 className="h-3 w-3" />
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <AnimatePresence mode="wait">
              {isGenerating && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex items-center justify-center p-8"
                >
                  <div className="text-center">
                    <Loader2 className="h-8 w-8 animate-spin text-blue-500 mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground">
                      {t('ai.generating')}
                    </p>
                  </div>
                </motion.div>
              )}

              {suggestion && !isGenerating && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <div>
                    <h4 className="font-medium mb-2">
                      {t("wizard.thirdStep.ai_suggestion")}
                    </h4>
                    {isEditing ? (
                      <Textarea
                        value={editedSuggestion}
                        onChange={(e) => setEditedSuggestion(e.target.value)}
                        className="min-h-[120px]"
                        placeholder={t('ai.edit_placeholder')}
                      />
                    ) : (
                      <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                        <p className="text-sm whitespace-pre-wrap">{suggestion}</p>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Button onClick={handleAccept} className="group">
                      <Check className="mr-2 h-4 w-4" />
                      {t('ai.accept')}
                    </Button>

                    {!isEditing ? (
                      <Button variant="outline" onClick={handleEdit}>
                        {t('ai.edit')}
                      </Button>
                    ) : (
                      <Button variant="outline" onClick={() => setIsEditing(false)}>
                        {t('ai.cancel_edit')}
                      </Button>
                    )}

                    <Button variant="outline" onClick={() => handleGenerate()} disabled={isGenerating}>
                      <RotateCcw className="mr-2 h-4 w-4" />
                      {t('ai.retry')}
                    </Button>

                    <Button variant="ghost" onClick={handleDiscard}>
                      <X className="mr-2 h-4 w-4" />
                      {t('ai.discard')}
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}