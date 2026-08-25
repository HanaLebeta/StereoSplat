<div align="center">

# StereoSplat

### Enhanced Sparse-View 3D Gaussian Splatting via Stereo-Depth Bootstrapping

<p>
<a href="#">
<img alt="Paper" src="https://img.shields.io/badge/Paper-Coming%20Soon-b31b1b?style=for-the-badge&logo=arxiv&logoColor=white">
</a>
<a href="https://hanalebeta.github.io/StereoSplat/">
<img alt="Project Page" src="https://img.shields.io/badge/Project-Page-blue?style=for-the-badge&logo=github-pages&logoColor=white">
</a>
<a href="https://github.com/HanaLebeta/StereoSplat">
<img alt="Code" src="https://img.shields.io/badge/Code-GitHub-181717?style=for-the-badge&logo=github&logoColor=white">
</a>
<a href="#">
<img alt="Python 3.8+" src="https://img.shields.io/badge/Python-3.8%2B-3776AB?style=for-the-badge&logo=python&logoColor=white">
</a>
<a href="#">
<img alt="PyTorch 1.12+" src="https://img.shields.io/badge/PyTorch-1.12%2B-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white">
</a>
<a href="LICENSE">
<img alt="License" src="https://img.shields.io/badge/License-Apache%202.0-green?style=for-the-badge&logo=apache&logoColor=white">
</a>
</p>

**Hana L. Goshu<sup>1</sup>, Tadesse G. Wakjira<sup>2</sup>, Kin-Man Lam<sup>1</sup>**

<sup>1</sup>The Hong Kong Polytechnic University &nbsp; <sup>2</sup>Kennesaw State University

*Under Review*

</div>

---

<div align="center">
<img src="docs/static/images/teaser.png" width="95%">
</div>

## Abstract

Reconstructing three-dimensional (3D) scenes from a few input views remains difficult when dense image acquisition is impractical. Recent sparse-view surface reconstruction methods based on 3D Gaussian Splatting rely on stereo matching to guide optimization; however, the dense metric depth they compute is underexploited, serving merely as a loss signal that adjusts existing primitives. StereoSplat converts this overlooked depth into explicit scene geometry through Stereo-Depth Point Unprojection, Stereo Quality Mask Selection, and Virtual View Photometric Augmentation. On the DTU dataset, StereoSplat attains a PSNR of 22.78 dB on the novel-view synthesis benchmark and preserves or improves surface reconstruction accuracy.

## Code

The full implementation will be released upon publication.

## Citation

```bibtex
@article{stereosplat2025,
    title   = {StereoSplat: Enhanced Sparse-View 3D Gaussian Splatting via Stereo-Depth Bootstrapping},
    author  = {Goshu, Hana L. and Wakjira, Tadesse G. and Lam, Kin-Man},
    year    = {2025},
    note    = {Under Review}
}
```
