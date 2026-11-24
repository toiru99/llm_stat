---
type: Model
title: Muse Spark Open (xhigh)
creator: Meta
license: Open
intelligence_index: 24.8815868992913
price_blended_usd_1m: 0.78
output_speed_tps: 175.823371763592
context_window: 1048576
status: current
size_class: Large
params_b: 816
is_reasoning: true
radar:
  knowledge: { s: 77.4, z: 1.49, r: 72.3, estimated: false }  # 전문 지식
  reasoning: { s: 63.9, z: 1.43, r: 71.4, estimated: false }  # 추론
  coding: { s: 84.8, z: 1.47, r: 72.1, estimated: false }  # 코딩
  agentic: { s: 79.5, z: 1.14, r: 67.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 88.6, z: 0.88, r: 63.2, estimated: false }  # 멀티모달
  long_context: { s: 88.3, z: 0.94, r: 64.1, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Spark Open (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Muse Spark Open (xhigh)

Meta · Open · Large(816B) · 컨텍스트 1M · 종합지능 **24.8815868992913**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $1.25 · 출력 $4.25 · 혼합 $0.78/1M · 175.823371763592 t/s · TTFT 1.00753435041666s · 1M ctx` · 가성비 31.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 72.3 | +1.49 | 실측 | [[gpqa-diamond]] 88.9899%×0.4, [[humanitys-last-exam]] 43.8832%×0.3 |
| 추론 | 71.4 | +1.43 | 실측 | [[critpt]] 14.8571%×1.0, [[gpqa-diamond]] 88.9899%×1.0, [[humanitys-last-exam]] 43.8832%×1.0 |
| 코딩 | 72.1 | +1.47 | 실측 | [[scicode]] 58.4491%×1.0 |
| 에이전트 | 67.1 | +1.14 | 실측 | [[gdpval]] 1401.12 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 63.2 | +0.88 | 실측 | [[mmmu-pro]] 80.9249%×1.0 |
| 긴문맥 | 64.1 | +0.94 | 실측 | [[aa-lcr]] 78.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
