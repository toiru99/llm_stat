---
type: Model
title: K2 Horizon 7B
creator: Institute of Foundation Models
license: Open
intelligence_index: 10.5630231522891
price_blended_usd_1m: None
output_speed_tps: None
context_window: 524288
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 53.3, z: 0.29, r: 54.3, estimated: false }  # 전문 지식
  reasoning: { s: 33.3, z: -0.11, r: 48.3, estimated: false }  # 추론
  coding: { s: 33.9, z: -0.21, r: 46.9, estimated: false }  # 코딩
  agentic: { s: 58.2, z: 0.46, r: 56.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 78.6, z: 0.74, r: 61.1, estimated: false }  # 긴문맥
  instruction: { s: 56.3, z: 0.1, r: 51.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — K2 Horizon 7B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# K2 Horizon 7B

Institute of Foundation Models · Open · Small · 컨텍스트 524k · 종합지능 **10.5630231522891**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 추론, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 524k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.3 | +0.29 | 실측 | [[gpqa-diamond]] 75.2525252525252%×0.4, [[humanitys-last-exam]] 18.2113067655236%×0.3 |
| 추론 | 48.3 | -0.11 | 실측 | [[critpt]] 0.28571428571428603%×1.0, [[gpqa-diamond]] 75.2525252525252%×1.0, [[humanitys-last-exam]] 18.2113067655236%×1.0 |
| 코딩 | 46.9 | -0.21 | 실측 | [[scicode]] 27.5462962962963%×1.0 |
| 에이전트 | 56.9 | +0.46 | 실측 | [[gdpval]] 1023.84%×1.0, [[tau3-banking]] 27.628865979381402%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.1 | +0.74 | 실측 | [[aa-lcr]] 69.6666666666667%×1.0 |
| 지시 따르기 | 51.5 | +0.1 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
