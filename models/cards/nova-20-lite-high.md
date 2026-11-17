---
type: Model
title: Nova 2.0 Lite (high)
creator: Amazon
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.52
output_speed_tps: 161.94572567783686
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 53.3, z: 0.3, r: 54.5, estimated: false }  # 전문 지식
  reasoning: { s: 32.6, z: -0.14, r: 47.9, estimated: false }  # 추론
  coding: { s: 25.3, z: -0.49, r: 42.6, estimated: false }  # 코딩
  agentic: { s: 44.3, z: -0.01, r: 49.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 65.9, z: -0.27, r: 45.9, estimated: false }  # 멀티모달
  long_context: { s: 68.0, z: 0.44, r: 56.6, estimated: false }  # 긴문맥
  instruction: { s: 82.3, z: 1.2, r: 68.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Lite (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Nova 2.0 Lite (high)

Amazon · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 멀티모달, 코딩

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.52/1M · 161.94572567783686 t/s · TTFT 22.524647279277286s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.5 | +0.3 | 실측 | [[gpqa-diamond]] 81.1111111111111%×0.4, [[humanitys-last-exam]] 11.631139944393%×0.3 |
| 추론 | 47.9 | -0.14 | 실측 | [[critpt]] 0.28571428571428603%×1.0, [[gpqa-diamond]] 81.1111111111111%×1.0, [[humanitys-last-exam]] 11.631139944393%×1.0 |
| 코딩 | 42.6 | -0.49 | 실측 | [[terminal-bench]] 16.6666666666667%×0.5 |
| 에이전트 | 49.9 | -0.01 | 실측 | [[gdpval]] 373.56%×1.0, [[tau2-bench]] 72.8070175438596%×1.0, [[terminal-bench]] 16.6666666666667%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 45.9 | -0.27 | 실측 | [[mmmu-pro]] 63.757225433526%×1.0 |
| 긴문맥 | 56.6 | +0.44 | 실측 | [[aa-lcr]] 60.33333333333331%×1.0 |
| 지시 따르기 | 68.0 | +1.2 | 실측 | [[ifbench]] 70.7482993197279%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
