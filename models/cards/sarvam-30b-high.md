---
type: Model
title: Sarvam 30B (high)
creator: Sarvam
license: Open
intelligence_index: 6.0
price_blended_usd_1m: 0.0274
output_speed_tps: None
context_window: 65500
status: current
size_class: Small
params_b: 32.2
is_reasoning: true
radar:
  knowledge: { s: 28.0, z: -0.64, r: 40.5, estimated: false }  # 전문 지식
  reasoning: { s: 25.1, z: -0.51, r: 42.3, estimated: false }  # 추론
  coding: { s: 22.1, z: -1.08, r: 33.8, estimated: false }  # 코딩
  agentic: { s: 19.2, z: -0.7, r: 39.5, estimated: false }  # 에이전트
  trust: { s: 2.3, z: -1.1, r: 33.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.53, r: 27.1, estimated: false }  # 긴문맥
  instruction: { s: 19.7, z: -1.41, r: 28.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Sarvam 30B (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-24
timestamp: 2026-08-24T00:00:00Z
---

# Sarvam 30B (high)

Sarvam · Open · Small(32.2B) · 컨텍스트 65k · 종합지능 **6.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $0.03 · 출력 $0.11 · 혼합 $0.0274/1M · None t/s · TTFT Nones · 65k ctx` · 가성비 219.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.5 | -0.64 | 실측 | [[aa-omniscience]] 13.0%×1.0, [[gpqa-diamond]] 63.0%×0.4, [[humanitys-last-exam]] 8.0%×0.3 |
| 추론 | 42.3 | -0.51 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 63.0%×1.0, [[humanitys-last-exam]] 8.0%×1.0 |
| 코딩 | 33.8 | -1.08 | 실측 | [[scicode]] 19.0%×1.0, [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 39.5 | -0.7 | 실측 | [[tau2-bench]] 35.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 33.4 | -1.1 | 실측 | [[aa-omniscience]] 4.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 27.1 | -1.53 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 28.8 | -1.41 | 실측 | [[ifbench]] 26.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
