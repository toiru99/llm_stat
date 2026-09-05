---
type: Model
title: Claude Opus 4.5
creator: Anthropic
license: Proprietary
intelligence_index: 34.0
price_blended_usd_1m: 3.85
output_speed_tps: 55.0
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 71.2, z: 1.46, r: 71.9, estimated: false }  # 전문 지식
  reasoning: { s: 51.7, z: 0.8, r: 62.0, estimated: false }  # 추론
  coding: { s: 71.2, z: 1.37, r: 70.6, estimated: false }  # 코딩
  agentic: { s: 80.6, z: 1.65, r: 74.7, estimated: false }  # 에이전트
  trust: { s: 38.1, z: 0.65, r: 59.7, estimated: false }  # 신뢰성
  multimodal: { s: 81.9, z: 0.58, r: 58.7, estimated: false }  # 멀티모달
  long_context: { s: 86.5, z: 1.15, r: 67.3, estimated: false }  # 긴문맥
  instruction: { s: 64.8, z: 0.51, r: 57.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Claude Opus 4.5

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **34.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 55.0 t/s · TTFT 17.71s · 200k ctx` · 가성비 8.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 71.9 | +1.46 | 실측 | [[aa-omniscience]] 47.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 30.0%×0.3 |
| 추론 | 62.0 | +0.8 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 30.0%×1.0 |
| 코딩 | 70.6 | +1.37 | 실측 | [[terminal-bench]] 47.0%×0.5 |
| 에이전트 | 74.7 | +1.65 | 실측 | [[tau2-bench]] 89.0%×1.0, [[terminal-bench]] 47.0%×1.0 |
| 신뢰성 | 59.7 | +0.65 | 실측 | [[aa-omniscience]] 39.0%×1.0 |
| 멀티모달 | 58.7 | +0.58 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 67.3 | +1.15 | 실측 | [[aa-lcr]] 77.0%×1.0 |
| 지시 따르기 | 57.7 | +0.51 | 실측 | [[ifbench]] 58.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
