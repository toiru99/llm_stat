---
type: Model
title: Grok 4 Fast
creator: SpaceXAI
license: Proprietary
intelligence_index: 28.0
price_blended_usd_1m: 0.23
output_speed_tps: None
context_window: 2000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 47.5, z: 0.34, r: 55.0, estimated: false }  # 전문 지식
  reasoning: { s: 43.6, z: 0.46, r: 56.9, estimated: false }  # 추론
  coding: { s: 58.5, z: 0.46, r: 56.8, estimated: false }  # 코딩
  agentic: { s: 47.7, z: 0.43, r: 56.4, estimated: false }  # 에이전트
  trust: { s: 30.9, z: 0.33, r: 54.9, estimated: false }  # 신뢰성
  multimodal: { s: 67.1, z: -0.19, r: 47.2, estimated: false }  # 멀티모달
  long_context: { s: 85.5, z: 1.11, r: 66.6, estimated: false }  # 긴문맥
  instruction: { s: 54.9, z: 0.11, r: 51.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4 Fast
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# Grok 4 Fast

SpaceXAI · Proprietary · Unknown · 컨텍스트 2M · 종합지능 **28.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 추론
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $0.2 · 출력 $0.5 · 혼합 $0.23/1M · None t/s · TTFT Nones · 2M ctx` · 가성비 121.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.0 | +0.34 | 실측 | [[aa-omniscience]] 23.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 19.0%×0.3 |
| 추론 | 56.9 | +0.46 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 19.0%×1.0 |
| 코딩 | 56.8 | +0.46 | 실측 | [[scicode]] 44.0%×1.0, [[terminal-bench]] 19.0%×0.5 |
| 에이전트 | 56.4 | +0.43 | 실측 | [[tau2-bench]] 66.0%×1.0, [[terminal-bench]] 19.0%×1.0 |
| 신뢰성 | 54.9 | +0.33 | 실측 | [[aa-omniscience]] 32.0%×1.0 |
| 멀티모달 | 47.2 | -0.19 | 실측 | [[mmmu-pro]] 62.0%×1.0 |
| 긴문맥 | 66.6 | +1.11 | 실측 | [[aa-lcr]] 71.0%×1.0 |
| 지시 따르기 | 51.6 | +0.11 | 실측 | [[ifbench]] 51.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
