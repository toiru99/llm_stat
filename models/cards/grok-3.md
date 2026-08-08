---
type: Model
title: Grok 3
creator: SpaceXAI
license: Proprietary
intelligence_index: 19.0
price_blended_usd_1m: 3.8763
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 43.2, z: 0.12, r: 51.8, estimated: false }  # 전문 지식
  reasoning: { s: 25.3, z: -0.47, r: 42.9, estimated: false }  # 추론
  coding: { s: 46.7, z: -0.03, r: 49.6, estimated: false }  # 코딩
  agentic: { s: 33.1, z: -0.11, r: 48.4, estimated: false }  # 에이전트
  trust: { s: 12.8, z: -0.62, r: 40.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 68.7, z: 0.59, r: 58.8, estimated: false }  # 긴문맥
  instruction: { s: 49.3, z: -0.18, r: 47.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-08
timestamp: 2026-08-08T00:00:00Z
---

# Grok 3

SpaceXAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **19.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $3.8763/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 4.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.8 | +0.12 | 실측 | [[aa-omniscience]] 29.0%×1.0, [[gpqa-diamond]] 69.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 42.9 | -0.47 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 69.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 49.6 | -0.03 | 실측 | [[scicode]] 37.0%×1.0, [[terminal-bench]] 11.0%×0.5 |
| 에이전트 | 48.4 | -0.11 | 실측 | [[tau2-bench]] 49.0%×1.0, [[terminal-bench]] 11.0%×1.0 |
| 신뢰성 | 40.7 | -0.62 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 58.8 | +0.59 | 실측 | [[aa-lcr]] 57.0%×1.0 |
| 지시 따르기 | 47.3 | -0.18 | 실측 | [[ifbench]] 47.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
