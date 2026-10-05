---
type: Model
title: Claude Opus 4.6 (max)
creator: Anthropic
license: Proprietary
intelligence_index: 32.0
price_blended_usd_1m: 3.85
output_speed_tps: 41.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 74.6, z: 1.48, r: 72.2, estimated: false }  # 전문 지식
  reasoning: { s: 66.2, z: 1.35, r: 70.2, estimated: false }  # 추론
  coding: { s: 69.7, z: 1.14, r: 67.1, estimated: false }  # 코딩
  agentic: { s: 77.4, z: 1.47, r: 72.1, estimated: false }  # 에이전트
  trust: { s: 36.1, z: 0.44, r: 56.7, estimated: false }  # 신뢰성
  multimodal: { s: 82.2, z: 0.54, r: 58.1, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 1.09, r: 66.3, estimated: false }  # 긴문맥
  instruction: { s: 57.7, z: 0.14, r: 52.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.6 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-05
timestamp: 2026-10-05T00:00:00Z
---

# Claude Opus 4.6 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **32.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 에이전트
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 41.0 t/s · TTFT 20.16s · 1M ctx` · 가성비 8.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.2 | +1.48 | 실측 | [[aa-omniscience]] 47.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 40.0%×0.3 |
| 추론 | 70.2 | +1.35 | 실측 | [[critpt]] 13.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 40.0%×1.0 |
| 코딩 | 67.1 | +1.14 | 실측 | [[terminal-bench]] 46.0%×0.5 |
| 에이전트 | 72.1 | +1.47 | 실측 | [[apex-agents]] 33.0%×1.0, [[tau2-bench]] 92.0%×1.0, [[terminal-bench]] 46.0%×1.0 |
| 신뢰성 | 56.7 | +0.44 | 실측 | [[aa-omniscience]] 37.0%×1.0 |
| 멀티모달 | 58.1 | +0.54 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 66.3 | +1.09 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 52.2 | +0.14 | 실측 | [[ifbench]] 53.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
