import { ThreadedStyleConfig } from "./interfaces/style-props/ThreadedStyleConfig";

export const threadedBaseStyle: ThreadedStyleConfig = {
  type: "threaded",
  commentFeedProps: {
    backgroundColor: "#fff",
    commentsGap: 0,
  },
  commentProps: {
    // Spacing and layout
    horizontalItemsGap: 12,
    verticalItemsGap: 8,

    // Avatar styling
    authorAvatarSize: 24,

    // Typography - Author
    authorFontSize: 12,
    authorFontWeight: 500,
    authorFontColor: "#374151",

    // Typography - Timestamp
    fromNowFontSize: 12,
    fromNowFontColor: "#6B7280",

    // Typography - Comment body
    commentBodyFontSize: 12,
    commentBodyFontColor: "#1F2937",

    // Actions and reply button
    actionsItemGap: 16,
    replyButtonFontSize: 12,
    replyButtonFontWeight: 500,
    replyButtonFontColor: "#6B7280",

    // Vote system
    voteIconSize: 12,
    upvoteColor: "#3B82F6", // blue-500
    upvoteHoverColor: "#EFF6FF", // blue-50
    downvoteColor: "#EF4444", // red-500
    downvoteHoverColor: "#FEF2F2", // red-50
    voteContainerBackground: "#F3F4F6",
    neutralVoteColor: "#6B7280",

    // Score display
    scoreTextSize: 12,
    scoreTextWeight: 500,
    scoreTextColor: "#374151",
    positiveScoreColor: "#3B82F6",
    negativeScoreColor: "#EF4444",

    // Threading lines
    threadingLineColor: "#D1D5DB",

    // Reply sections
    repliesGap: 0,
    repliesPaddingTop: 8,
    viewRepliesPaddingTop: 8,

    // Text labels
    viewMoreRepliesText: "Show more replies ($count)",
    hideRepliesText: "Hide replies",
    justNowText: "Just now",
  },
  newCommentFormProps: {
    backgroundColor: "#FFFFFF",
    withAvatar: false,
    itemsGap: 8,
    verticalPadding: 8,
    paddingLeft: 8,
    paddingRight: 8,
    authorAvatarSize: 24,
    placeholderText: "Add your reply...",
    textareaTextSize: 12,
    textareaBackgroundColor: "transparent",
    textareaTextColor: "#111827",
    postButtonText: "Post",
    postButtonFontSize: 12,
    postButtonFontWeight: 400,
    postButtonFontColor: "#FFFFFF",
  },
};
