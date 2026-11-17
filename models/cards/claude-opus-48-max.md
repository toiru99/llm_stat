---
type: Model
title: Claude Opus 4.8 (max)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.85
output_speed_tps: 84.11978862465095
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 82.2, z: 1.7, r: 75.5, estimated: false }  # 전문 지식
  reasoning: { s: 72.8, z: 1.86, r: 77.8, estimated: false }  # 추론
  coding: { s: 81.6, z: 1.42, r: 71.4, estimated: false }  # 코딩
  agentic: { s: 83.1, z: 1.34, r: 70.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 1.02, r: 65.3, estimated: false }  # 긴문맥
  instruction: { s: 70.4, z: 0.7, r: 60.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.8 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Claude Opus 4.8 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 84.11978862465095 t/s · TTFT 34.19893761300842s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 75.5 | +1.7 | 실측 | [[gpqa-diamond]] 92.020202020202%×0.4, [[humanitys-last-exam]] 48.6561631139944%×0.3 |
| 추론 | 77.8 | +1.86 | 실측 | [[critpt]] 20.8571428571429%×1.0, [[gpqa-diamond]] 92.020202020202%×1.0, [[humanitys-last-exam]] 48.6561631139944%×1.0 |
| 코딩 | 71.4 | +1.42 | 실측 | [[scicode]] 54.398148148148195%×1.0, [[terminal-bench]] 58.3333333333333%×0.5 |
| 에이전트 | 70.0 | +1.34 | 실측 | [[gdpval]] 1461.41%×1.0, [[tau2-bench]] 94.4444444444445%×1.0, [[tau3-banking]] 34.226804123711304%×1.0, [[terminal-bench]] 58.3333333333333%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.3 | +1.02 | 실측 | [[aa-lcr]] 77.6666666666667%×1.0 |
| 지시 따르기 | 60.5 | +0.7 | 실측 | [[ifbench]] 62.244897959183696%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
