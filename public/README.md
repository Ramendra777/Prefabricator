# Static Assets Directory

## Models
- Store GLB/GLTF 3D models here
- Each model should have:
  - Compressed textures (<2MB total)
  - Corresponding metadata JSON
  - License documentation

## Images
- Max width: 1920px
- Preferred format: WebP
- Compress with:
  ```bash
  npx sharp -i input.jpg -o output.webp -q 80
  ```

---

### **How to Add Actual Files**
1. **For 3D Models**:
   - Export from Blender/SketchUp as `.glb`
   - Validate with:
     ```bash
     npx gltfjsx public/models/your-model.glb --debug
     ```

2. **For Images**:
   - Convert to WebP:
     ```bash
     convert input.jpg -quality 80 output.webp
     ```

3. **For Documents**:
   - Place final PDFs in `public/documents/`

---

### **Verification Script**
Add this to `package.json`:
```json
"scripts": {
  "check-assets": "node scripts/verify-assets.js"
}