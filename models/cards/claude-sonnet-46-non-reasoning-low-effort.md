---
type: Model
title: Claude Sonnet 4.6 (Non-reasoning, Low Effort)
creator: Anthropic
license: Proprietary
intelligence_index: 34.0
price_blended_usd_1m: 2.31
output_speed_tps: 44.0
context_window: 1000000
radar:
  knowledge: { s: 57.3, z: 0.27, r: 54.0, estimated: false }  # 전문 지식
  reasoning: { s: 35.2, z: -0.44, r: 43.4, estimated: false }  # 추론
  coding: { s: 71.1, z: 0.5, r: 57.6, estimated: false }  # 코딩
  agentic: { s: 73.2, z: 0.85, r: 62.7, estimated: false }  # 에이전트
  trust: { s: 45.0, z: 0.4, r: 55.9, estimated: false }  # 신뢰성
  multimodal: { s: 74.1, z: -0.05, r: 49.2, estimated: false }  # 멀티모달
  long_context: { s: 79.7, z: 0.33, r: 54.9, estimated: false }  # 긴문맥
  instruction: { s: 42.3, z: -1.03, r: 34.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 4.6 (Non-reasoning, Low Effort)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-27
timestamp: 2026-06-27T00:00:00Z
---

# Claude Sonnet 4.6 (Non-reasoning, Low Effort)

Anthropic · Proprietary · 컨텍스트 1M · 종합지능 **34.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 44.0 t/s · TTFT 1.24s · 1M ctx` · 가성비 14.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.0 | +0.27 | 실측 | [[aa-omniscience]] 36.0%×1.0, [[gpqa-diamond]] 80.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 43.4 | -0.44 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 80.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 57.6 | +0.5 | 실측 | [[scicode]] 44.0%×1.0, [[terminal-bench]] 42.0%×0.5 |
| 에이전트 | 62.7 | +0.85 | 실측 | [[tau2-bench]] 79.0%×1.0, [[terminal-bench]] 42.0%×1.0 |
| 신뢰성 | 55.9 | +0.4 | 실측 | [[aa-omniscience]] 40.0%×1.0 |
| 멀티모달 | 49.2 | -0.05 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 54.9 | +0.33 | 실측 | [[aa-lcr]] 59.0%×1.0 |
| 지시 따르기 | 34.5 | -1.03 | 실측 | [[ifbench]] 42.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
