---
type: Model
title: Kimi K2
creator: Kimi
license: Open
intelligence_index: 20.0
price_blended_usd_1m: 0.743
output_speed_tps: 40.0
context_window: 128000
status: past
size_class: Large
params_b: 1000
is_reasoning: false
radar:
  knowledge: { s: 44.1, z: 0.19, r: 52.8, estimated: false }  # 전문 지식
  reasoning: { s: 29.7, z: -0.24, r: 46.4, estimated: false }  # 추론
  coding: { s: 44.6, z: -0.09, r: 48.7, estimated: false }  # 코딩
  agentic: { s: 42.9, z: 0.23, r: 53.4, estimated: false }  # 에이전트
  trust: { s: 21.6, z: -0.13, r: 48.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 63.9, z: 0.43, r: 56.4, estimated: false }  # 긴문맥
  instruction: { s: 40.8, z: -0.5, r: 42.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# Kimi K2

Kimi · Open · Large(1000B) · 컨텍스트 128k · 종합지능 **20.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.57 · 출력 $2.3 · 혼합 $0.743/1M · 40.0 t/s · TTFT 1.46s · 128k ctx` · 가성비 26.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.8 | +0.19 | 실측 | [[aa-omniscience]] 27.0%×1.0, [[gpqa-diamond]] 77.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 46.4 | -0.24 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 77.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 48.7 | -0.09 | 실측 | [[scicode]] 34.0%×1.0, [[terminal-bench]] 16.0%×0.5 |
| 에이전트 | 53.4 | +0.23 | 실측 | [[tau2-bench]] 61.0%×1.0, [[terminal-bench]] 16.0%×1.0 |
| 신뢰성 | 48.1 | -0.13 | 실측 | [[aa-omniscience]] 23.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 56.4 | +0.43 | 실측 | [[aa-lcr]] 53.0%×1.0 |
| 지시 따르기 | 42.5 | -0.5 | 실측 | [[ifbench]] 41.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
