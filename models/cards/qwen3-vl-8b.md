---
type: Model
title: Qwen3 VL 8B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Small
params_b: 8.8
is_reasoning: false
radar:
  knowledge: { s: 22.7, z: -1.17, r: 32.5, estimated: false }  # 전문 지식
  reasoning: { s: 13.4, z: -1.08, r: 33.8, estimated: false }  # 추론
  coding: { s: 3.4, z: -1.27, r: 31.0, estimated: false }  # 코딩
  agentic: { s: 16.5, z: -1.08, r: 33.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 43.8, z: -1.41, r: 28.9, estimated: false }  # 멀티모달
  long_context: { s: 18.8, z: -1.19, r: 32.1, estimated: false }  # 긴문맥
  instruction: { s: 28.4, z: -0.92, r: 36.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 VL 8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Qwen3 VL 8B

Alibaba · Open · Small(8.8B) · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 32.5 | -1.17 | 실측 | [[gpqa-diamond]] 42.7273%×0.4, [[humanitys-last-exam]] 2.68767%×0.3 |
| 추론 | 33.8 | -1.08 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 42.7273%×1.0, [[humanitys-last-exam]] 2.68767%×1.0 |
| 코딩 | 31.0 | -1.27 | 실측 | [[terminal-bench]] 2.27273%×0.5 |
| 에이전트 | 33.8 | -1.08 | 실측 | [[tau2-bench]] 29.2398%×1.0, [[terminal-bench]] 2.27273%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 28.9 | -1.41 | 실측 | [[mmmu-pro]] 47.341%×1.0 |
| 긴문맥 | 32.1 | -1.19 | 실측 | [[aa-lcr]] 16.6667%×1.0 |
| 지시 따르기 | 36.2 | -0.92 | 실측 | [[ifbench]] 32.3129%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
