import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Loader2, Check, X, RotateCcw } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Textarea } from './ui/textarea';
import { useI18n } from '../contexts/I18nContext';
import { toast } from 'sonner@2.0.3';
import { getOpenApiMessage } from '../services/openai';

interface AIAssistantProps {
  fieldName: string;
  fieldLabel: string;
  currentValue: string;
  onAccept: (suggestion: string) => void;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}


export default function AIAssistant({
  fieldName,
  fieldLabel,
  currentValue,
  onAccept,
  isOpen,
  onOpenChange
}: AIAssistantProps) {
  const { t } = useI18n();
  const [isGenerating, setIsGenerating] = useState(false);
  const [suggestion, setSuggestion] = useState('');
  const [editedSuggestion, setEditedSuggestion] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const handleGenerate = async () => {
    setIsGenerating(true);
    setSuggestion('');
    setEditedSuggestion('');
    setIsEditing(false);

    try {
      const result = await getOpenApiMessage(fieldLabel)
      // setSuggestion(fieldName, currentValue);
      setSuggestion(result);
      setEditedSuggestion(result);
    } catch (error) {
      toast.error(t('ai.error'));
      console.error('AI generation error:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleAccept = () => {
    const finalText = isEditing ? editedSuggestion : suggestion;
    onAccept(finalText);
    onOpenChange(false);
    toast.success('Suggestion accepted');
  };

  const handleDiscard = () => {
    setSuggestion('');
    setEditedSuggestion('');
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  React.useEffect(() => {
    if (isOpen) {
      setSuggestion('');
      setEditedSuggestion('');
      setIsEditing(false);
      handleGenerate();
    }
  }, [isOpen, fieldLabel]);

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
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Current value:</p>
                <p className="text-sm">{currentValue}</p>
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
                    <h4 className="font-medium mb-2">AI Suggestion:</h4>
                    {isEditing ? (
                      <Textarea
                        value={editedSuggestion}
                        onChange={(e) => setEditedSuggestion(e.target.value)}
                        className="min-h-[120px]"
                        placeholder="Edit the suggestion..."
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
                        Cancel Edit
                      </Button>
                    )}

                    <Button variant="outline" onClick={handleGenerate} disabled={isGenerating}>
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