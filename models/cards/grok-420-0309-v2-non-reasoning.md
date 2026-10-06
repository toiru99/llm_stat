---
type: Model
title: Grok 4.20 0309 v2 (non-reasoning)
creator: SpaceXAI
license: Proprietary
intelligence_index: 14.0
price_blended_usd_1m: 0.64
output_speed_tps: 113.0
context_window: 2000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 50.3, z: 0.36, r: 55.3, estimated: false }  # 전문 지식
  reasoning: { s: 41.4, z: 0.22, r: 53.3, estimated: false }  # 추론
  coding: { s: 25.8, z: -0.37, r: 44.5, estimated: false }  # 코딩
  agentic: { s: 43.2, z: 0.17, r: 52.5, estimated: false }  # 에이전트
  trust: { s: 1.0, z: -1.18, r: 32.3, estimated: false }  # 신뢰성
  multimodal: { s: 68.5, z: -0.14, r: 47.8, estimated: false }  # 멀티모달
  long_context: { s: 25.8, z: -0.78, r: 38.3, estimated: false }  # 긴문맥
  instruction: { s: 52.1, z: -0.09, r: 48.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.20 0309 v2 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-06
timestamp: 2026-10-06T00:00:00Z
---

# Grok 4.20 0309 v2 (non-reasoning)

SpaceXAI · Proprietary · Unknown · 컨텍스트 2M · 종합지능 **14.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 긴문맥, 신뢰성

## 실용 지표
`입력 $1.25 · 출력 $2.5 · 혼합 $0.64/1M · 113.0 t/s · TTFT 0.66s · 2M ctx` · 가성비 21.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.3 | +0.36 | 실측 | [[aa-omniscience]] 27.0%×1.0, [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 28.0%×0.3 |
| 추론 | 53.3 | +0.22 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 28.0%×1.0 |
| 코딩 | 44.5 | -0.37 | 실측 | [[terminal-bench]] 17.0%×0.5 |
| 에이전트 | 52.5 | +0.17 | 실측 | [[tau2-bench]] 60.0%×1.0, [[terminal-bench]] 17.0%×1.0 |
| 신뢰성 | 32.3 | -1.18 | 실측 | [[aa-omniscience]] 3.0%×1.0 |
| 멀티모달 | 47.8 | -0.14 | 실측 | [[mmmu-pro]] 65.0%×1.0 |
| 긴문맥 | 38.3 | -0.78 | 실측 | [[aa-lcr]] 23.0%×1.0 |
| 지시 따르기 | 48.6 | -0.09 | 실측 | [[ifbench]] 49.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
