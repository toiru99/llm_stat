---
type: Model
title: Claude Opus 4.8 (max)
creator: Anthropic
license: Proprietary
intelligence_index: 56.0
price_blended_usd_1m: 3.85
output_speed_tps: 66.0
context_window: 1000000
radar:
  knowledge: { s: 83.3, z: 1.44, r: 71.5, estimated: false }  # 전문 지식
  reasoning: { s: 84.0, z: 1.86, r: 77.8, estimated: false }  # 추론
  coding: { s: 89.6, z: 1.3, r: 69.5, estimated: false }  # 코딩
  agentic: { s: 90.6, z: 1.52, r: 72.8, estimated: false }  # 에이전트
  trust: { s: 75.0, z: 1.45, r: 71.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 91.9, z: 0.76, r: 61.4, estimated: false }  # 긴문맥
  instruction: { s: 70.4, z: 0.14, r: 52.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.8 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-26
timestamp: 2026-06-26T00:00:00Z
---

# Claude Opus 4.8 (max)

Anthropic · Proprietary · 컨텍스트 1M · 종합지능 **56.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 66.0 t/s · TTFT 16.75s · 1M ctx` · 가성비 14.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 71.5 | +1.44 | 실측 | [[aa-omniscience]] 47.0%×1.0, [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 46.0%×0.3 |
| 추론 | 77.8 | +1.86 | 실측 | [[critpt]] 21.0%×1.0, [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 46.0%×1.0 |
| 코딩 | 69.5 | +1.3 | 실측 | [[scicode]] 53.0%×1.0, [[terminal-bench]] 58.0%×0.5 |
| 에이전트 | 72.8 | +1.52 | 실측 | [[gdpval]] 55.0%×1.0, [[tau2-bench]] 94.0%×1.0, [[tau3-banking]] 28.0%×1.0, [[terminal-bench]] 58.0%×1.0 |
| 신뢰성 | 71.8 | +1.45 | 실측 | [[aa-omniscience]] 64.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.4 | +0.76 | 실측 | [[aa-lcr]] 68.0%×1.0 |
| 지시 따르기 | 52.2 | +0.14 | 실측 | [[ifbench]] 62.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
