# Threaded Style Reference - Value Mapping

This document maps styleConfig paths to their hardcoded values for the transformation.

## Comment Feed Props

```typescript
styleConfig.commentFeedProps.backgroundColor → "#fff"
styleConfig.commentFeedProps.commentsGap → 0
```

## Comment Props

### Spacing and Layout
```typescript
styleConfig.commentProps.horizontalItemsGap → 12
styleConfig.commentProps.verticalItemsGap → 8
```

### Avatar
```typescript
styleConfig.commentProps.authorAvatarSize → 24
```

### Typography - Author
```typescript
styleConfig.commentProps.authorFontSize → 12
styleConfig.commentProps.authorFontWeight → 500
styleConfig.commentProps.authorFontColor → "#374151"
```

### Typography - Timestamp
```typescript
styleConfig.commentProps.fromNowFontSize → 12
styleConfig.commentProps.fromNowFontColor → "#6B7280"
```

### Typography - Comment Body
```typescript
styleConfig.commentProps.commentBodyFontSize → 12
styleConfig.commentProps.commentBodyFontColor → "#1F2937"
```

### Actions and Reply Button
```typescript
styleConfig.commentProps.actionsItemGap → 16
styleConfig.commentProps.replyButtonFontSize → 12
styleConfig.commentProps.replyButtonFontWeight → 500
styleConfig.commentProps.replyButtonFontColor → "#6B7280"
```

### Vote System
```typescript
styleConfig.commentProps.voteIconSize → 12
styleConfig.commentProps.upvoteColor → "#3B82F6"
styleConfig.commentProps.upvoteHoverColor → "#EFF6FF"
styleConfig.commentProps.downvoteColor → "#EF4444"
styleConfig.commentProps.downvoteHoverColor → "#FEF2F2"
styleConfig.commentProps.voteContainerBackground → "#F3F4F6"
styleConfig.commentProps.neutralVoteColor → "#6B7280"
```

### Score Display
```typescript
styleConfig.commentProps.scoreTextSize → 12
styleConfig.commentProps.scoreTextWeight → 500
styleConfig.commentProps.scoreTextColor → "#374151"
styleConfig.commentProps.positiveScoreColor → "#3B82F6"
styleConfig.commentProps.negativeScoreColor → "#EF4444"
```

### Threading Lines
```typescript
styleConfig.commentProps.threadingLineColor → "#D1D5DB"
```

### Reply Sections
```typescript
styleConfig.commentProps.repliesGap → 0
styleConfig.commentProps.repliesPaddingTop → 8
styleConfig.commentProps.viewRepliesPaddingTop → 8
```

### Text Labels
```typescript
styleConfig.commentProps.viewMoreRepliesText → "Show more replies ($count)"
styleConfig.commentProps.hideRepliesText → "Hide replies"
styleConfig.commentProps.justNowText → "Just now"
```

## New Comment Form Props

```typescript
styleConfig.newCommentFormProps.backgroundColor → "#FFFFFF"
styleConfig.newCommentFormProps.withAvatar → false
styleConfig.newCommentFormProps.itemsGap → 8
styleConfig.newCommentFormProps.verticalPadding → 8
styleConfig.newCommentFormProps.paddingLeft → 8
styleConfig.newCommentFormProps.paddingRight → 8
styleConfig.newCommentFormProps.authorAvatarSize → 24
styleConfig.newCommentFormProps.placeholderText → "Add your reply..."
styleConfig.newCommentFormProps.textareaTextSize → 12
styleConfig.newCommentFormProps.textareaBackgroundColor → "transparent"
styleConfig.newCommentFormProps.textareaTextColor → "#111827"
styleConfig.newCommentFormProps.postButtonText → "Post"
styleConfig.newCommentFormProps.postButtonFontSize → 12
styleConfig.newCommentFormProps.postButtonFontWeight → 400
styleConfig.newCommentFormProps.postButtonFontColor → "#FFFFFF"
```

## Transformation Pattern

### Before:
```typescript
import { useThreadedStyleConfig } from '@replyke/comments-threaded-core';

function Component() {
  const { styleConfig } = useThreadedStyleConfig();
  const { voteIconSize, upvoteColor } = styleConfig!.commentProps;

  return <div style={{ width: voteIconSize, color: upvoteColor }}>...</div>;
}
```

### After:
```typescript
// No imports needed for styles

function Component() {
  // 🎨 CUSTOMIZATION: Vote button styling
  const voteIconSize = 12;          // Default: 12px
  const upvoteColor = '#3B82F6';    // Default: blue-500

  return <div style={{ width: voteIconSize, color: upvoteColor }}>...</div>;
}
```
