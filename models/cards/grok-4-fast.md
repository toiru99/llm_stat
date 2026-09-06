---
type: Model
title: Grok 4 Fast
creator: SpaceXAI
license: Proprietary
intelligence_index: 21.0
price_blended_usd_1m: 0.23
output_speed_tps: None
context_window: 2000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 46.2, z: 0.25, r: 53.8, estimated: false }  # 전문 지식
  reasoning: { s: 42.5, z: 0.36, r: 55.4, estimated: false }  # 추론
  coding: { s: 28.8, z: -0.12, r: 48.2, estimated: false }  # 코딩
  agentic: { s: 47.7, z: 0.39, r: 55.9, estimated: false }  # 에이전트
  trust: { s: 30.9, z: 0.3, r: 54.5, estimated: false }  # 신뢰성
  multimodal: { s: 65.3, z: -0.24, r: 46.4, estimated: false }  # 멀티모달
  long_context: { s: 83.1, z: 1.05, r: 65.7, estimated: false }  # 긴문맥
  instruction: { s: 54.9, z: 0.09, r: 51.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4 Fast
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Grok 4 Fast

SpaceXAI · Proprietary · Unknown · 컨텍스트 2M · 종합지능 **21.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $0.2 · 출력 $0.5 · 혼합 $0.23/1M · None t/s · TTFT Nones · 2M ctx` · 가성비 91.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.8 | +0.25 | 실측 | [[aa-omniscience]] 23.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 19.0%×0.3 |
| 추론 | 55.4 | +0.36 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 19.0%×1.0 |
| 코딩 | 48.2 | -0.12 | 실측 | [[terminal-bench]] 19.0%×0.5 |
| 에이전트 | 55.9 | +0.39 | 실측 | [[tau2-bench]] 66.0%×1.0, [[terminal-bench]] 19.0%×1.0 |
| 신뢰성 | 54.5 | +0.3 | 실측 | [[aa-omniscience]] 32.0%×1.0 |
| 멀티모달 | 46.4 | -0.24 | 실측 | [[mmmu-pro]] 62.0%×1.0 |
| 긴문맥 | 65.7 | +1.05 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 51.4 | +0.09 | 실측 | [[ifbench]] 51.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
