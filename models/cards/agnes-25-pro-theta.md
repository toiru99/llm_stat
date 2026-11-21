---
type: Model
title: Agnes 2.5 Pro Theta
creator: Sapiens AI
license: Proprietary
intelligence_index: 24.029012523359
price_blended_usd_1m: 0.057
output_speed_tps: 191.235441826247
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 49.3, z: 0.09, r: 51.4, estimated: false }  # 전문 지식
  reasoning: { s: 45.9, z: 0.51, r: 57.6, estimated: false }  # 추론
  coding: { s: 80.8, z: 1.38, r: 70.7, estimated: false }  # 코딩
  agentic: { s: 84.2, z: 1.36, r: 70.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 85.3, z: 0.71, r: 60.6, estimated: false }  # 멀티모달
  long_context: { s: 95.5, z: 1.24, r: 68.6, estimated: false }  # 긴문맥
  instruction: { s: 59.6, z: 0.24, r: 53.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Agnes 2.5 Pro Theta
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# Agnes 2.5 Pro Theta

Sapiens AI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **24.029012523359**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $0.1 · 출력 $0.3 · 혼합 $0.057/1M · 191.235441826247 t/s · TTFT 3.75314670644232s · 1M ctx` · 가성비 421.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.4 | +0.09 | 실측 | [[humanitys-last-exam]] 37.1640407784986%×0.3 |
| 추론 | 57.6 | +0.51 | 실측 | [[critpt]] 15.1428571428571%×1.0, [[humanitys-last-exam]] 37.1640407784986%×1.0 |
| 코딩 | 70.7 | +1.38 | 실측 | [[scicode]] 56.0185185185185%×1.0 |
| 에이전트 | 70.4 | +1.36 | 실측 | [[gdpval]] 1507.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 60.6 | +0.71 | 실측 | [[mmmu-pro]] 78.4393063583815%×1.0 |
| 긴문맥 | 68.6 | +1.24 | 실측 | [[aa-lcr]] 84.6666666666667%×1.0 |
| 지시 따르기 | 53.6 | +0.24 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
