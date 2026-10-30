---
type: Model
title: Qwen3.8 27B (xhigh)
creator: Alibaba
license: Open
intelligence_index: 20.0
price_blended_usd_1m: 0.47
output_speed_tps: 37.0
context_window: 256000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 77.4, z: 1.23, r: 68.5, estimated: false }  # 전문 지식
  reasoning: { s: 51.6, z: 0.27, r: 54.0, estimated: false }  # 추론
  coding: { s: 66.7, z: 0.99, r: 64.9, estimated: false }  # 코딩
  agentic: { s: 85.3, z: 1.76, r: 76.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 83.6, z: 0.57, r: 58.6, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.2, r: 68.0, estimated: false }  # 긴문맥
  instruction: { s: 56.1, z: 0.14, r: 52.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8 27B (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-30
timestamp: 2026-10-30T00:00:00Z
---

# Qwen3.8 27B (xhigh)

Alibaba · Open · Small · 컨텍스트 256k · 종합지능 **20.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.5 · 출력 $3.0 · 혼합 $0.47/1M · 37.0 t/s · TTFT 4.09s · 256k ctx` · 가성비 42.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 68.5 | +1.23 | 실측 | [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 34.0%×0.3 |
| 추론 | 54.0 | +0.27 | 실측 | [[critpt]] 4.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 34.0%×1.0 |
| 코딩 | 64.9 | +0.99 | 실측 | [[scicode]] 47.0%×1.0 |
| 에이전트 | 76.4 | +1.76 | 실측 | [[gdpval]] 1427.0%×1.0, [[tau3-banking]] 48.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 58.6 | +0.57 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 68.0 | +1.2 | 실측 | [[aa-lcr]] 82.0%×1.0 |
| 지시 따르기 | 52.1 | +0.14 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
