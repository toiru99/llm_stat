---
type: Model
title: K2 Horizon 375B A23B
creator: Institute of Foundation Models
license: Open
intelligence_index: 17.8202731734027
price_blended_usd_1m: 0
output_speed_tps: 294.712030586186
context_window: 524288
status: current
size_class: Large
params_b: 375
is_reasoning: true
radar:
  knowledge: { s: 69.3, z: 1.09, r: 66.4, estimated: false }  # 전문 지식
  reasoning: { s: 48.2, z: 0.65, r: 59.7, estimated: false }  # 추론
  coding: { s: 59.2, z: 0.61, r: 59.2, estimated: false }  # 코딩
  agentic: { s: 72.2, z: 0.88, r: 63.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 90.2, z: 0.99, r: 64.9, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — K2 Horizon 375B A23B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# K2 Horizon 375B A23B

Institute of Foundation Models · Open · Large(375B) · 컨텍스트 524k · 종합지능 **17.8202731734027**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 추론, 코딩

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · 294.712030586186 t/s · TTFT 3.03202238543008s · 524k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 66.4 | +1.09 | 실측 | [[gpqa-diamond]] 87.2727%×0.4, [[humanitys-last-exam]] 31.9741%×0.3 |
| 추론 | 59.7 | +0.65 | 실측 | [[critpt]] 4.57143%×1.0, [[gpqa-diamond]] 87.2727%×1.0, [[humanitys-last-exam]] 31.9741%×1.0 |
| 코딩 | 59.2 | +0.61 | 실측 | [[scicode]] 42.9398%×1.0 |
| 에이전트 | 63.3 | +0.88 | 실측 | [[gdpval]] 1363.76 Elo×1.0, [[tau3-banking]] 34.2268%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.9 | +0.99 | 실측 | [[aa-lcr]] 80%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
