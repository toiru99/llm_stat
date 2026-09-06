---
type: Model
title: Claude Opus 4.5 (Non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: 28.0
price_blended_usd_1m: 3.85
output_speed_tps: 48.0
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 59.1, z: 0.87, r: 63.1, estimated: false }  # 전문 지식
  reasoning: { s: 34.4, z: -0.03, r: 49.5, estimated: false }  # 추론
  coding: { s: 62.1, z: 1.04, r: 65.7, estimated: false }  # 코딩
  agentic: { s: 74.5, z: 1.42, r: 71.3, estimated: false }  # 에이전트
  trust: { s: 22.7, z: -0.09, r: 48.7, estimated: false }  # 신뢰성
  multimodal: { s: 77.8, z: 0.38, r: 55.7, estimated: false }  # 멀티모달
  long_context: { s: 79.8, z: 0.94, r: 64.2, estimated: false }  # 긴문맥
  instruction: { s: 43.7, z: -0.38, r: 44.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.5 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Claude Opus 4.5 (Non-reasoning)

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **28.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 48.0 t/s · TTFT 1.44s · 200k ctx` · 가성비 7.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.1 | +0.87 | 실측 | [[aa-omniscience]] 41.0%×1.0, [[gpqa-diamond]] 81.0%×0.4, [[humanitys-last-exam]] 13.0%×0.3 |
| 추론 | 49.5 | -0.03 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 81.0%×1.0, [[humanitys-last-exam]] 13.0%×1.0 |
| 코딩 | 65.7 | +1.04 | 실측 | [[terminal-bench]] 41.0%×0.5 |
| 에이전트 | 71.3 | +1.42 | 실측 | [[tau2-bench]] 86.0%×1.0, [[terminal-bench]] 41.0%×1.0 |
| 신뢰성 | 48.7 | -0.09 | 실측 | [[aa-omniscience]] 24.0%×1.0 |
| 멀티모달 | 55.7 | +0.38 | 실측 | [[mmmu-pro]] 71.0%×1.0 |
| 긴문맥 | 64.2 | +0.94 | 실측 | [[aa-lcr]] 71.0%×1.0 |
| 지시 따르기 | 44.3 | -0.38 | 실측 | [[ifbench]] 43.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
