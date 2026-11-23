---
type: Model
title: Qwen3.8 27B (xhigh)
creator: Alibaba
license: Open
intelligence_index: 20.1068756031705
price_blended_usd_1m: 0.47
output_speed_tps: 66.5691296839878
context_window: 256000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 72.6, z: 1.22, r: 68.3, estimated: false }  # 전문 지식
  reasoning: { s: 51.1, z: 0.77, r: 61.5, estimated: false }  # 추론
  coding: { s: 65.3, z: 0.86, r: 62.9, estimated: false }  # 코딩
  agentic: { s: 87.1, z: 1.46, r: 71.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 82.4, z: 0.56, r: 58.4, estimated: false }  # 멀티모달
  long_context: { s: 92.5, z: 1.15, r: 67.3, estimated: false }  # 긴문맥
  instruction: { s: 72.8, z: 0.79, r: 61.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8 27B (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# Qwen3.8 27B (xhigh)

Alibaba · Open · Small · 컨텍스트 256k · 종합지능 **20.1068756031705**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $0.5 · 출력 $3.0 · 혼합 $0.47/1M · 66.5691296839878 t/s · TTFT 5.82237702474431s · 256k ctx` · 가성비 42.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 68.3 | +1.22 | 실측 | [[gpqa-diamond]] 90.5050505050505%×0.4, [[humanitys-last-exam]] 33.920296570899%×0.3 |
| 추론 | 61.5 | +0.77 | 실측 | [[critpt]] 5.42857142857143%×1.0, [[gpqa-diamond]] 90.5050505050505%×1.0, [[humanitys-last-exam]] 33.920296570899%×1.0 |
| 코딩 | 62.9 | +0.86 | 실측 | [[scicode]] 46.6435185185185%×1.0 |
| 에이전트 | 71.9 | +1.46 | 실측 | [[gdpval]] 1426.15%×1.0, [[tau3-banking]] 48.041237113402104%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 58.4 | +0.56 | 실측 | [[mmmu-pro]] 76.3005780346821%×1.0 |
| 긴문맥 | 67.3 | +1.15 | 실측 | [[aa-lcr]] 82.0%×1.0 |
| 지시 따르기 | 61.9 | +0.79 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
