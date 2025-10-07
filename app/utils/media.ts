export const IMAGE_UPLOAD_MAX_BYTES = 8 * 1024 * 1024;
export const VIDEO_UPLOAD_MAX_BYTES = 50 * 1024 * 1024;

export function isWithinUploadLimit(size: number, type: 'image' | 'video') {
  return type === 'image' ? size <= IMAGE_UPLOAD_MAX_BYTES : size <= VIDEO_UPLOAD_MAX_BYTES;
}
