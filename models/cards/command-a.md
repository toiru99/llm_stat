---
type: Model
title: Command A+
creator: Cohere
license: Open
intelligence_index: 6.24120025576958
price_blended_usd_1m: 0
output_speed_tps: 169.9954572866005
context_window: 192000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 50.2, z: 0.15, r: 52.2, estimated: false }  # 전문 지식
  reasoning: { s: 30.8, z: -0.23, r: 46.6, estimated: false }  # 추론
  coding: { s: 47.3, z: 0.26, r: 53.9, estimated: false }  # 코딩
  agentic: { s: 42.8, z: -0.06, r: 49.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 65.2, z: -0.31, r: 45.3, estimated: false }  # 멀티모달
  long_context: { s: 59.4, z: 0.18, r: 52.7, estimated: false }  # 긴문맥
  instruction: { s: 86.8, z: 1.39, r: 70.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Command A+
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Command A+

Cohere · Open · Large · 컨텍스트 192k · 종합지능 **6.24120025576958**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · 169.9954572866005 t/s · TTFT 1.0206312465631096s · 192k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.2 | +0.15 | 실측 | [[gpqa-diamond]] 76.06060606060609%×0.4, [[humanitys-last-exam]] 11.9555143651529%×0.3 |
| 추론 | 46.6 | -0.23 | 실측 | [[critpt]] 0.28571428571428603%×1.0, [[gpqa-diamond]] 76.06060606060609%×1.0, [[humanitys-last-exam]] 11.9555143651529%×1.0 |
| 코딩 | 53.9 | +0.26 | 실측 | [[scicode]] 38.5416666666667%×1.0, [[terminal-bench]] 25.0%×0.5 |
| 에이전트 | 49.1 | -0.06 | 실측 | [[gdpval]] 521.53%×1.0, [[tau2-bench]] 80.7017543859649%×1.0, [[tau3-banking]] 5.97938144329897%×1.0, [[terminal-bench]] 25.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 45.3 | -0.31 | 실측 | [[mmmu-pro]] 63.2369942196532%×1.0 |
| 긴문맥 | 52.7 | +0.18 | 실측 | [[aa-lcr]] 52.66666666666669%×1.0 |
| 지시 따르기 | 70.8 | +1.39 | 실측 | [[ifbench]] 73.9455782312925%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
