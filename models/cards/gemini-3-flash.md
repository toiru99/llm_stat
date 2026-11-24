---
type: Model
title: Gemini 3 Flash
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.435
output_speed_tps: 194.80852067933
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 73.6, z: 1.31, r: 69.6, estimated: false }  # 전문 지식
  reasoning: { s: 55.0, z: 0.99, r: 64.8, estimated: false }  # 추론
  coding: { s: 58.6, z: 0.59, r: 58.9, estimated: false }  # 코딩
  agentic: { s: 60.0, z: 0.46, r: 56.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 87.3, z: 0.81, r: 62.2, estimated: false }  # 멀티모달
  long_context: { s: 88.0, z: 0.93, r: 63.9, estimated: false }  # 긴문맥
  instruction: { s: 92.5, z: 1.75, r: 76.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Gemini 3 Flash

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.5 · 출력 $3.0 · 혼합 $0.435/1M · 194.80852067933 t/s · TTFT 4.62303417490835s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 69.6 | +1.31 | 실측 | [[gpqa-diamond]] 89.798%×0.4, [[humanitys-last-exam]] 36.5616%×0.3 |
| 추론 | 64.8 | +0.99 | 실측 | [[critpt]] 8.57143%×1.0, [[gpqa-diamond]] 89.798%×1.0, [[humanitys-last-exam]] 36.5616%×1.0 |
| 코딩 | 58.9 | +0.59 | 실측 | [[terminal-bench]] 38.6364%×0.5 |
| 에이전트 | 56.8 | +0.46 | 실측 | [[tau2-bench]] 80.4094%×1.0, [[tau3-banking]] 20.8247%×1.0, [[terminal-bench]] 38.6364%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 62.2 | +0.81 | 실측 | [[mmmu-pro]] 79.9422%×1.0 |
| 긴문맥 | 63.9 | +0.93 | 실측 | [[aa-lcr]] 78%×1.0 |
| 지시 따르기 | 76.2 | +1.75 | 실측 | [[ifbench]] 77.9592%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
