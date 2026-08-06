---
type: Model
title: Cogito v2.1
creator: Deep Cogito
license: Open
intelligence_index: None
price_blended_usd_1m: 1.25
output_speed_tps: None
context_window: 128000
status: current
size_class: Large
params_b: 671
is_reasoning: true
radar:
  knowledge: { s: 50.6, z: 0.43, r: 56.5, estimated: false }  # 전문 지식
  reasoning: { s: 33.0, z: -0.09, r: 48.7, estimated: false }  # 추론
  coding: { s: 54.1, z: 0.28, r: 54.2, estimated: false }  # 코딩
  agentic: { s: 25.8, z: -0.4, r: 44.0, estimated: false }  # 에이전트
  trust: { s: 23.0, z: -0.26, r: 46.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 28.9, z: -0.62, r: 40.7, estimated: false }  # 긴문맥
  instruction: { s: 47.9, z: -0.22, r: 46.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Cogito v2.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# Cogito v2.1

Deep Cogito · Open · Large(671B) · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $1.25 · 출력 $1.25 · 혼합 $1.25/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.5 | +0.43 | 실측 | [[aa-omniscience]] 30.0%×1.0, [[gpqa-diamond]] 77.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 48.7 | -0.09 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 77.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 54.2 | +0.28 | 실측 | [[scicode]] 41.0%×1.0, [[terminal-bench]] 17.0%×0.5 |
| 에이전트 | 44.0 | -0.4 | 실측 | [[terminal-bench]] 17.0%×1.0 |
| 신뢰성 | 46.1 | -0.26 | 실측 | [[aa-omniscience]] 21.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 40.7 | -0.62 | 실측 | [[aa-lcr]] 22.0%×1.0 |
| 지시 따르기 | 46.7 | -0.22 | 실측 | [[ifbench]] 46.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
