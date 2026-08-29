---
type: Model
title: Grok 4 Fast (Non-reasoning)
creator: SpaceXAI
license: Proprietary
intelligence_index: 17.0
price_blended_usd_1m: 0.23
output_speed_tps: None
context_window: 2000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 31.7, z: -0.45, r: 43.3, estimated: false }  # 전문 지식
  reasoning: { s: 22.5, z: -0.61, r: 40.9, estimated: false }  # 추론
  coding: { s: 42.7, z: -0.2, r: 47.0, estimated: false }  # 코딩
  agentic: { s: 41.4, z: 0.18, r: 52.7, estimated: false }  # 에이전트
  trust: { s: 10.3, z: -0.65, r: 40.3, estimated: false }  # 신뢰성
  multimodal: { s: 47.1, z: -1.17, r: 32.5, estimated: false }  # 멀티모달
  long_context: { s: 26.5, z: -0.7, r: 39.5, estimated: false }  # 긴문맥
  instruction: { s: 36.6, z: -0.66, r: 40.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4 Fast (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# Grok 4 Fast (Non-reasoning)

SpaceXAI · Proprietary · Unknown · 컨텍스트 2M · 종합지능 **17.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $0.2 · 출력 $0.5 · 혼합 $0.23/1M · None t/s · TTFT Nones · 2M ctx` · 가성비 73.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.3 | -0.45 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 61.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 40.9 | -0.61 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 61.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 47.0 | -0.2 | 실측 | [[scicode]] 33.0%×1.0, [[terminal-bench]] 12.0%×0.5 |
| 에이전트 | 52.7 | +0.18 | 실측 | [[tau2-bench]] 64.0%×1.0, [[terminal-bench]] 12.0%×1.0 |
| 신뢰성 | 40.3 | -0.65 | 실측 | [[aa-omniscience]] 12.0%×1.0 |
| 멀티모달 | 32.5 | -1.17 | 실측 | [[mmmu-pro]] 48.0%×1.0 |
| 긴문맥 | 39.5 | -0.7 | 실측 | [[aa-lcr]] 22.0%×1.0 |
| 지시 따르기 | 40.1 | -0.66 | 실측 | [[ifbench]] 38.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
