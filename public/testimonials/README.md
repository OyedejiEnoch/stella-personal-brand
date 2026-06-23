# Testimonial screenshots

Drop the owner's testimonial screenshot images in this folder.

Expected filenames (referenced in `components/sections/Testimonials.tsx`):

- `testimonial-1.jpg`
- `testimonial-2.jpg`
- `testimonial-3.jpg`
- `testimonial-4.jpg`
- `testimonial-5.jpg`

Notes:
- Tall / portrait images look best (e.g. phone/chat screenshots).
- `.png` works too — just update the file extensions in the `TESTIMONIALS`
  array in `Testimonials.tsx` to match.
- To add or remove a testimonial, edit that same `TESTIMONIALS` array. The
  stack animation adapts to the number of items automatically.
- Until real images are added, a neutral placeholder is shown automatically.
