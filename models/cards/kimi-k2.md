---
type: Model
title: Kimi K2
creator: Kimi
license: Open
intelligence_index: 19.0
price_blended_usd_1m: 0.61
output_speed_tps: 36.0
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 46.3, z: 0.28, r: 54.1, estimated: false }  # 전문 지식
  reasoning: { s: 30.4, z: -0.17, r: 47.5, estimated: false }  # 추론
  coding: { s: 45.9, z: -0.02, r: 49.7, estimated: false }  # 코딩
  agentic: { s: 42.9, z: 0.26, r: 53.9, estimated: false }  # 에이전트
  trust: { s: 29.4, z: 0.07, r: 51.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 67.1, z: 0.55, r: 58.2, estimated: false }  # 긴문맥
  instruction: { s: 40.8, z: -0.47, r: 42.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-17
timestamp: 2026-07-17T00:00:00Z
---

# Kimi K2

Kimi · Open · Unknown · 컨텍스트 128k · 종합지능 **19.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.58 · 출력 $2.4 · 혼합 $0.61/1M · 36.0 t/s · TTFT 2.26s · 128k ctx` · 가성비 31.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.1 | +0.28 | 실측 | [[aa-omniscience]] 27.0%×1.0, [[gpqa-diamond]] 77.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 47.5 | -0.17 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 77.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 49.7 | -0.02 | 실측 | [[scicode]] 34.0%×1.0, [[terminal-bench]] 16.0%×0.5 |
| 에이전트 | 53.9 | +0.26 | 실측 | [[tau2-bench]] 61.0%×1.0, [[terminal-bench]] 16.0%×1.0 |
| 신뢰성 | 51.1 | +0.07 | 실측 | [[aa-omniscience]] 26.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 58.2 | +0.55 | 실측 | [[aa-lcr]] 51.0%×1.0 |
| 지시 따르기 | 42.9 | -0.47 | 실측 | [[ifbench]] 41.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
