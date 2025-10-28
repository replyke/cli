import { CommentStyleProps } from "./CommentStyleProps";
import { CommentFeedStyleProps } from "./CommentFeedStyleProps";
import { NewCommentFormStyleProps } from "./NewCommentFormStyleProps";

export type SocialStyleConfig = {
  type: "social";
  commentFeedProps: CommentFeedStyleProps;
  commentProps: CommentStyleProps;
  newCommentFormProps: NewCommentFormStyleProps;
};

export type PartialSocialStyleConfig = {
  commentFeedProps: Partial<CommentFeedStyleProps>;
  commentProps: Partial<CommentStyleProps>;
  newCommentFormProps: Partial<NewCommentFormStyleProps>;
};
