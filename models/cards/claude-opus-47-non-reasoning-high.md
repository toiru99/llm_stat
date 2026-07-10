---
type: Model
title: Claude Opus 4.7 (Non-reasoning, high)
creator: Anthropic
license: Proprietary
intelligence_index: 43.0
price_blended_usd_1m: 3.85
output_speed_tps: 43.0
context_window: 1000000
radar:
  knowledge: { s: 74.2, z: 0.8, r: 61.9, estimated: false }  # 전문 지식
  reasoning: { s: 55.4, z: 0.29, r: 54.3, estimated: false }  # 추론
  coding: { s: 83.3, z: 0.85, r: 62.7, estimated: false }  # 코딩
  agentic: { s: 79.0, z: 0.98, r: 64.7, estimated: false }  # 에이전트
  trust: { s: 55.0, z: 0.83, r: 62.4, estimated: false }  # 신뢰성
  multimodal: { s: 86.2, z: 0.4, r: 56.0, estimated: false }  # 멀티모달
  long_context: { s: 90.5, z: 0.62, r: 59.2, estimated: false }  # 긴문맥
  instruction: { s: 45.1, z: -1.14, r: 32.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.7 (Non-reasoning, high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# Claude Opus 4.7 (Non-reasoning, high)

Anthropic · Proprietary · 컨텍스트 1M · 종합지능 **43.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 43.0 t/s · TTFT 1.56s · 1M ctx` · 가성비 11.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.9 | +0.8 | 실측 | [[aa-omniscience]] 44.0%×1.0, [[gpqa-diamond]] 88.0%×0.4, [[humanitys-last-exam]] 31.0%×0.3 |
| 추론 | 54.3 | +0.29 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 88.0%×1.0, [[humanitys-last-exam]] 31.0%×1.0 |
| 코딩 | 62.7 | +0.85 | 실측 | [[scicode]] 50.0%×1.0, [[terminal-bench]] 55.0%×0.5 |
| 에이전트 | 64.7 | +0.98 | 실측 | [[tau2-bench]] 74.0%×1.0, [[terminal-bench]] 55.0%×1.0 |
| 신뢰성 | 62.4 | +0.83 | 실측 | [[aa-omniscience]] 48.0%×1.0 |
| 멀티모달 | 56.0 | +0.4 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 59.2 | +0.62 | 실측 | [[aa-lcr]] 67.0%×1.0 |
| 지시 따르기 | 32.8 | -1.14 | 실측 | [[ifbench]] 44.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
