---
type: Model
title: gpt-oss-120b (high)
creator: OpenAI
license: Open
intelligence_index: 3.81981165137417
price_blended_usd_1m: 0.16
output_speed_tps: 190.475044268325
context_window: 131072
status: current
size_class: Medium
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 56.0, z: 0.42, r: 56.3, estimated: false }  # 전문 지식
  reasoning: { s: 35.9, z: 0.01, r: 50.2, estimated: false }  # 추론
  coding: { s: 41.6, z: 0.05, r: 50.8, estimated: false }  # 코딩
  agentic: { s: 42.9, z: -0.07, r: 48.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 58.6, z: 0.15, r: 52.2, estimated: false }  # 긴문맥
  instruction: { s: 79.8, z: 1.09, r: 66.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — gpt-oss-120b (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# gpt-oss-120b (high)

OpenAI · Open · Medium · 컨텍스트 131k · 종합지능 **3.81981165137417**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.15 · 출력 $0.6 · 혼합 $0.16/1M · 190.475044268325 t/s · TTFT 1.34313966273988s · 131k ctx` · 가성비 23.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.3 | +0.42 | 실측 | [[gpqa-diamond]] 78.1818181818182%×0.4, [[humanitys-last-exam]] 19.6014828544949%×0.3 |
| 추론 | 50.2 | +0.01 | 실측 | [[critpt]] 1.1428571428571401%×1.0, [[gpqa-diamond]] 78.1818181818182%×1.0, [[humanitys-last-exam]] 19.6014828544949%×1.0 |
| 코딩 | 50.8 | +0.05 | 실측 | [[scicode]] 34.0277777777778%×1.0, [[terminal-bench]] 23.4848484848485%×0.5 |
| 에이전트 | 48.9 | -0.07 | 실측 | [[gdpval]] 615.28%×1.0, [[tau2-bench]] 65.78947368421049%×1.0, [[tau3-banking]] 12.7835051546392%×1.0, [[terminal-bench]] 23.4848484848485%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 52.2 | +0.15 | 실측 | [[aa-lcr]] 52.0%×1.0 |
| 지시 따르기 | 66.3 | +1.09 | 실측 | [[ifbench]] 68.9795918367347%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
