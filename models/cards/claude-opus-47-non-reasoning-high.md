---
type: Model
title: Claude Opus 4.7 (non-reasoning, high)
creator: Anthropic
license: Proprietary
intelligence_index: 31.0
price_blended_usd_1m: 3.85
output_speed_tps: 49.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 70.3, z: 1.25, r: 68.8, estimated: false }  # 전문 지식
  reasoning: { s: 53.1, z: 0.72, r: 60.7, estimated: false }  # 추론
  coding: { s: 83.3, z: 1.53, r: 73.0, estimated: false }  # 코딩
  agentic: { s: 83.3, z: 1.68, r: 75.2, estimated: false }  # 에이전트
  trust: { s: 45.4, z: 0.82, r: 62.3, estimated: false }  # 신뢰성
  multimodal: { s: 83.6, z: 0.57, r: 58.5, estimated: false }  # 멀티모달
  long_context: { s: 85.4, z: 0.98, r: 64.7, estimated: false }  # 긴문맥
  instruction: { s: 45.1, z: -0.4, r: 44.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.7 (non-reasoning, high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Claude Opus 4.7 (non-reasoning, high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **31.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 49.0 t/s · TTFT 0.88s · 1M ctx` · 가성비 8.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 68.8 | +1.25 | 실측 | [[aa-omniscience]] 45.0%×1.0, [[gpqa-diamond]] 88.0%×0.4, [[humanitys-last-exam]] 33.0%×0.3 |
| 추론 | 60.7 | +0.72 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 88.0%×1.0, [[humanitys-last-exam]] 33.0%×1.0 |
| 코딩 | 73.0 | +1.53 | 실측 | [[terminal-bench]] 55.0%×0.5 |
| 에이전트 | 75.2 | +1.68 | 실측 | [[terminal-bench]] 55.0%×1.0 |
| 신뢰성 | 62.3 | +0.82 | 실측 | [[aa-omniscience]] 46.0%×1.0 |
| 멀티모달 | 58.5 | +0.57 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 64.7 | +0.98 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 44.0 | -0.4 | 실측 | [[ifbench]] 44.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
