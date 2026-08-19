---
type: Model
title: Claude Opus 4.5
creator: Anthropic
license: Proprietary
intelligence_index: 42.0
price_blended_usd_1m: 3.85
output_speed_tps: 45.0
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 73.1, z: 1.51, r: 72.7, estimated: false }  # 전문 지식
  reasoning: { s: 53.3, z: 0.87, r: 63.1, estimated: false }  # 추론
  coding: { s: 79.3, z: 1.27, r: 69.0, estimated: false }  # 코딩
  agentic: { s: 80.6, z: 1.71, r: 75.7, estimated: false }  # 에이전트
  trust: { s: 43.0, z: 0.69, r: 60.4, estimated: false }  # 신뢰성
  multimodal: { s: 84.3, z: 0.57, r: 58.6, estimated: false }  # 멀티모달
  long_context: { s: 91.6, z: 1.24, r: 68.6, estimated: false }  # 긴문맥
  instruction: { s: 64.8, z: 0.42, r: 56.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-19
timestamp: 2026-08-19T00:00:00Z
---

# Claude Opus 4.5

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **42.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 45.0 t/s · TTFT 11.19s · 200k ctx` · 가성비 10.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.7 | +1.51 | 실측 | [[aa-omniscience]] 47.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 30.0%×0.3 |
| 추론 | 63.1 | +0.87 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 30.0%×1.0 |
| 코딩 | 69.0 | +1.27 | 실측 | [[scicode]] 50.0%×1.0, [[terminal-bench]] 47.0%×0.5 |
| 에이전트 | 75.7 | +1.71 | 실측 | [[tau2-bench]] 89.0%×1.0, [[terminal-bench]] 47.0%×1.0 |
| 신뢰성 | 60.4 | +0.69 | 실측 | [[aa-omniscience]] 39.0%×1.0 |
| 멀티모달 | 58.6 | +0.57 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 68.6 | +1.24 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 56.3 | +0.42 | 실측 | [[ifbench]] 58.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
