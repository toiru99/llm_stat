---
type: Model
title: Kimi K2
creator: Kimi
license: Open
intelligence_index: 13.0
price_blended_usd_1m: 0.743
output_speed_tps: 52.0
context_window: 128000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 43.8, z: 0.06, r: 50.9, estimated: false }  # 전문 지식
  reasoning: { s: 29.3, z: -0.33, r: 45.1, estimated: false }  # 추론
  coding: { s: 24.2, z: -0.42, r: 43.7, estimated: false }  # 코딩
  agentic: { s: 42.9, z: 0.16, r: 52.4, estimated: false }  # 에이전트
  trust: { s: 21.6, z: -0.23, r: 46.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 59.6, z: 0.24, r: 53.6, estimated: false }  # 긴문맥
  instruction: { s: 40.8, z: -0.56, r: 41.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-04
timestamp: 2026-10-04T00:00:00Z
---

# Kimi K2

Kimi · Open · Large · 컨텍스트 128k · 종합지능 **13.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $0.57 · 출력 $2.3 · 혼합 $0.743/1M · 52.0 t/s · TTFT 1.5s · 128k ctx` · 가성비 17.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.9 | +0.06 | 실측 | [[aa-omniscience]] 27.0%×1.0, [[gpqa-diamond]] 77.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 45.1 | -0.33 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 77.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 43.7 | -0.42 | 실측 | [[terminal-bench]] 16.0%×0.5 |
| 에이전트 | 52.4 | +0.16 | 실측 | [[tau2-bench]] 61.0%×1.0, [[terminal-bench]] 16.0%×1.0 |
| 신뢰성 | 46.6 | -0.23 | 실측 | [[aa-omniscience]] 23.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 53.6 | +0.24 | 실측 | [[aa-lcr]] 53.0%×1.0 |
| 지시 따르기 | 41.6 | -0.56 | 실측 | [[ifbench]] 41.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
