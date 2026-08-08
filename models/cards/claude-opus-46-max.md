---
type: Model
title: Claude Opus 4.6 (max)
creator: Anthropic
license: Proprietary
intelligence_index: 45.0
price_blended_usd_1m: 3.85
output_speed_tps: 43.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 77.4, z: 1.76, r: 76.4, estimated: false }  # 전문 지식
  reasoning: { s: 69.4, z: 1.71, r: 75.6, estimated: false }  # 추론
  coding: { s: 81.0, z: 1.4, r: 71.0, estimated: false }  # 코딩
  agentic: { s: 77.4, z: 1.66, r: 74.8, estimated: false }  # 에이전트
  trust: { s: 40.7, z: 0.66, r: 59.9, estimated: false }  # 신뢰성
  multimodal: { s: 85.7, z: 0.67, r: 60.1, estimated: false }  # 멀티모달
  long_context: { s: 89.2, z: 1.21, r: 68.1, estimated: false }  # 긴문맥
  instruction: { s: 57.7, z: 0.17, r: 52.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.6 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-08
timestamp: 2026-08-08T00:00:00Z
---

# Claude Opus 4.6 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **45.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 43.0 t/s · TTFT 12.93s · 1M ctx` · 가성비 11.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 76.4 | +1.76 | 실측 | [[aa-omniscience]] 47.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 40.0%×0.3 |
| 추론 | 75.6 | +1.71 | 실측 | [[critpt]] 13.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 40.0%×1.0 |
| 코딩 | 71.0 | +1.4 | 실측 | [[scicode]] 52.0%×1.0, [[terminal-bench]] 46.0%×0.5 |
| 에이전트 | 74.8 | +1.66 | 실측 | [[apex-agents]] 33.0%×1.0, [[tau2-bench]] 92.0%×1.0, [[terminal-bench]] 46.0%×1.0 |
| 신뢰성 | 59.9 | +0.66 | 실측 | [[aa-omniscience]] 37.0%×1.0 |
| 멀티모달 | 60.1 | +0.67 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 68.1 | +1.21 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 52.6 | +0.17 | 실측 | [[ifbench]] 53.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
