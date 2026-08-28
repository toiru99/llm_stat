---
type: Model
title: Claude 3.7 Sonnet (Non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: 24.0
price_blended_usd_1m: 2.31
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 41.8, z: 0.06, r: 50.8, estimated: false }  # 전문 지식
  reasoning: { s: 23.8, z: -0.54, r: 41.9, estimated: false }  # 추론
  coding: { s: 52.8, z: 0.22, r: 53.3, estimated: false }  # 코딩
  agentic: { s: 41.2, z: 0.17, r: 52.5, estimated: false }  # 에이전트
  trust: { s: 46.4, z: 1.05, r: 65.8, estimated: false }  # 신뢰성
  multimodal: { s: 64.3, z: -0.33, r: 45.1, estimated: false }  # 멀티모달
  long_context: { s: 60.2, z: 0.33, r: 55.0, estimated: false }  # 긴문맥
  instruction: { s: 45.1, z: -0.3, r: 45.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 3.7 Sonnet (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-28
timestamp: 2026-08-28T00:00:00Z
---

# Claude 3.7 Sonnet (Non-reasoning)

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **24.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · None t/s · TTFT Nones · 200k ctx` · 가성비 10.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.8 | +0.06 | 실측 | [[aa-omniscience]] 28.0%×1.0, [[gpqa-diamond]] 66.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 41.9 | -0.54 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 66.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 53.3 | +0.22 | 실측 | [[scicode]] 38.0%×1.0, [[terminal-bench]] 21.0%×0.5 |
| 에이전트 | 52.5 | +0.17 | 실측 | [[tau2-bench]] 50.0%×1.0, [[terminal-bench]] 21.0%×1.0 |
| 신뢰성 | 65.8 | +1.05 | 실측 | [[aa-omniscience]] 47.0%×1.0 |
| 멀티모달 | 45.1 | -0.33 | 실측 | [[mmmu-pro]] 60.0%×1.0 |
| 긴문맥 | 55.0 | +0.33 | 실측 | [[aa-lcr]] 50.0%×1.0 |
| 지시 따르기 | 45.4 | -0.3 | 실측 | [[ifbench]] 44.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
