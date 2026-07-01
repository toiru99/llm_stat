---
type: Model
title: Claude Sonnet 4.6 (Non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: 36.0
price_blended_usd_1m: 2.31
output_speed_tps: 44.0
context_window: 1000000
radar:
  knowledge: { s: 59.9, z: 0.35, r: 55.3, estimated: false }  # 전문 지식
  reasoning: { s: 36.5, z: -0.43, r: 43.6, estimated: false }  # 추론
  coding: { s: 76.6, z: 0.71, r: 60.6, estimated: false }  # 코딩
  agentic: { s: 76.9, z: 0.99, r: 64.8, estimated: false }  # 에이전트
  trust: { s: 37.5, z: 0.07, r: 51.0, estimated: false }  # 신뢰성
  multimodal: { s: 77.6, z: 0.08, r: 51.2, estimated: false }  # 멀티모달
  long_context: { s: 78.4, z: 0.26, r: 53.8, estimated: false }  # 긴문맥
  instruction: { s: 40.8, z: -1.17, r: 32.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 4.6 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-01
timestamp: 2026-07-01T00:00:00Z
---

# Claude Sonnet 4.6 (Non-reasoning)

Anthropic · Proprietary · 컨텍스트 1M · 종합지능 **36.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 44.0 t/s · TTFT 1.21s · 1M ctx` · 가성비 15.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.3 | +0.35 | 실측 | [[aa-omniscience]] 38.0%×1.0, [[gpqa-diamond]] 80.0%×0.4, [[humanitys-last-exam]] 13.0%×0.3 |
| 추론 | 43.6 | -0.43 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 80.0%×1.0, [[humanitys-last-exam]] 13.0%×1.0 |
| 코딩 | 60.6 | +0.71 | 실측 | [[scicode]] 47.0%×1.0, [[terminal-bench]] 46.0%×0.5 |
| 에이전트 | 64.8 | +0.99 | 실측 | [[tau2-bench]] 80.0%×1.0, [[terminal-bench]] 46.0%×1.0 |
| 신뢰성 | 51.0 | +0.07 | 실측 | [[aa-omniscience]] 34.0%×1.0 |
| 멀티모달 | 51.2 | +0.08 | 실측 | [[mmmu-pro]] 71.0%×1.0 |
| 긴문맥 | 53.8 | +0.26 | 실측 | [[aa-lcr]] 58.0%×1.0 |
| 지시 따르기 | 32.4 | -1.17 | 실측 | [[ifbench]] 41.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
