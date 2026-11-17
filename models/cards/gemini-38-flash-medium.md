---
type: Model
title: Gemini 3.8 Flash (medium)
creator: Google
license: Proprietary
intelligence_index: 30.078569475636
price_blended_usd_1m: 0.5775
output_speed_tps: 120.40894196536026
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.4, z: 1.56, r: 73.4, estimated: false }  # 전문 지식
  reasoning: { s: 62.4, z: 1.34, r: 70.1, estimated: false }  # 추론
  coding: { s: 79.2, z: 1.34, r: 70.2, estimated: false }  # 코딩
  agentic: { s: 85.0, z: 1.4, r: 71.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 93.3, z: 1.13, r: 66.9, estimated: false }  # 멀티모달
  long_context: { s: 94.7, z: 1.23, r: 68.5, estimated: false }  # 긴문맥
  instruction: { s: 80.7, z: 1.13, r: 67.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.8 Flash (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Gemini 3.8 Flash (medium)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **30.078569475636** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 에이전트
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $0.75 · 출력 $3.75 · 혼합 $0.5775/1M · 120.40894196536026 t/s · TTFT 14.05856790881977s · 1M ctx` · 가성비 52.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.4 | +1.56 | 실측 | [[gpqa-diamond]] 93.53535353535351%×0.4, [[humanitys-last-exam]] 42.122335495829496%×0.3 |
| 추론 | 70.1 | +1.34 | 실측 | [[critpt]] 12.285714285714299%×1.0, [[gpqa-diamond]] 93.53535353535351%×1.0, [[humanitys-last-exam]] 42.122335495829496%×1.0 |
| 코딩 | 70.2 | +1.34 | 실측 | [[scicode]] 55.0925925925926%×1.0 |
| 에이전트 | 71.0 | +1.4 | 실측 | [[gdpval]] 1432.18%×1.0, [[tau3-banking]] 45.7731958762887%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 66.9 | +1.13 | 실측 | [[mmmu-pro]] 84.2196531791908%×1.0 |
| 긴문맥 | 68.5 | +1.23 | 실측 | [[aa-lcr]] 84.0%×1.0 |
| 지시 따르기 | 67.0 | +1.13 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
