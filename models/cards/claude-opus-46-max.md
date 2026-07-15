---
type: Model
title: Claude Opus 4.6 (max)
creator: Anthropic
license: Proprietary
intelligence_index: 44.0
price_blended_usd_1m: 3.85
output_speed_tps: 40.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 78.7, z: 1.86, r: 77.9, estimated: false }  # 전문 지식
  reasoning: { s: 68.4, z: 1.84, r: 77.7, estimated: false }  # 추론
  coding: { s: 81.0, z: 1.48, r: 72.2, estimated: false }  # 코딩
  agentic: { s: 77.4, z: 1.61, r: 74.2, estimated: false }  # 에이전트
  trust: { s: 44.7, z: 0.8, r: 62.0, estimated: false }  # 신뢰성
  multimodal: { s: 87.0, z: 0.74, r: 61.1, estimated: false }  # 멀티모달
  long_context: { s: 93.4, z: 1.33, r: 70.0, estimated: false }  # 긴문맥
  instruction: { s: 57.7, z: 0.23, r: 53.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.6 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-15
timestamp: 2026-07-15T00:00:00Z
---

# Claude Opus 4.6 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **44.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 40.0 t/s · TTFT 16.18s · 1M ctx` · 가성비 11.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 77.9 | +1.86 | 실측 | [[aa-omniscience]] 46.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 37.0%×0.3 |
| 추론 | 77.7 | +1.84 | 실측 | [[critpt]] 13.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 37.0%×1.0 |
| 코딩 | 72.2 | +1.48 | 실측 | [[scicode]] 52.0%×1.0, [[terminal-bench]] 46.0%×0.5 |
| 에이전트 | 74.2 | +1.61 | 실측 | [[apex-agents]] 33.0%×1.0, [[tau2-bench]] 92.0%×1.0, [[terminal-bench]] 46.0%×1.0 |
| 신뢰성 | 62.0 | +0.8 | 실측 | [[aa-omniscience]] 39.0%×1.0 |
| 멀티모달 | 61.1 | +0.74 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 70.0 | +1.33 | 실측 | [[aa-lcr]] 71.0%×1.0 |
| 지시 따르기 | 53.4 | +0.23 | 실측 | [[ifbench]] 53.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
