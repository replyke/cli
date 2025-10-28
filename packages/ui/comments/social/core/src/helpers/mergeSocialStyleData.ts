import { safeMergeStyleProps } from "@replyke/ui-core";
import { socialBaseStyle } from "../social-base-style";
import { CommentStyleProps } from "../interfaces/style-props/CommentStyleProps";
import { CommentFeedStyleProps } from "../interfaces/style-props/CommentFeedStyleProps";
import { NewCommentFormStyleProps } from "../interfaces/style-props/NewCommentFormStyleProps";
import { SocialStyleConfig } from "../interfaces/style-props/SocialStyleConfig";

export function mergeSocialStyleData(
  commentFeedProps?: Partial<CommentFeedStyleProps>,
  commentProps?: Partial<CommentStyleProps>,
  newCommentFormProps?: Partial<NewCommentFormStyleProps>
): SocialStyleConfig {
  const mergedStyle = {
    type: socialBaseStyle.type,
    commentFeedProps: safeMergeStyleProps(
      socialBaseStyle.commentFeedProps,
      commentFeedProps
    ),
    commentProps: safeMergeStyleProps(
      socialBaseStyle.commentProps,
      commentProps
    ),
    newCommentFormProps: safeMergeStyleProps(
      socialBaseStyle.newCommentFormProps,
      newCommentFormProps
    ),
  };

  return mergedStyle;
}
