---
type: Model
title: Cogito v2.1
creator: Deep Cogito
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 50.7, z: 0.16, r: 52.4, estimated: false }  # 전문 지식
  reasoning: { s: 30.8, z: -0.24, r: 46.4, estimated: false }  # 추론
  coding: { s: 25.3, z: -0.5, r: 42.5, estimated: false }  # 코딩
  agentic: { s: 25.3, z: -0.68, r: 39.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 25.6, z: -0.83, r: 37.5, estimated: false }  # 긴문맥
  instruction: { s: 47.9, z: -0.25, r: 46.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Cogito v2.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# Cogito v2.1

Deep Cogito · Open · Large · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.4 | +0.16 | 실측 | [[gpqa-diamond]] 76.76767676767679%×0.4, [[humanitys-last-exam]] 12.0018535681186%×0.3 |
| 추론 | 46.4 | -0.24 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 76.76767676767679%×1.0, [[humanitys-last-exam]] 12.0018535681186%×1.0 |
| 코딩 | 42.5 | -0.5 | 실측 | [[terminal-bench]] 16.6666666666667%×0.5 |
| 에이전트 | 39.8 | -0.68 | 실측 | [[terminal-bench]] 16.6666666666667%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 37.5 | -0.83 | 실측 | [[aa-lcr]] 22.6666666666667%×1.0 |
| 지시 따르기 | 46.3 | -0.25 | 실측 | [[ifbench]] 46.2585034013605%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
