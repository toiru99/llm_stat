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
params_b: 671
is_reasoning: true
radar:
  knowledge: { s: 50.7, z: 0.19, r: 52.8, estimated: false }  # 전문 지식
  reasoning: { s: 30.8, z: -0.22, r: 46.7, estimated: false }  # 추론
  coding: { s: 25.3, z: -0.53, r: 42.0, estimated: false }  # 코딩
  agentic: { s: 25.3, z: -0.77, r: 38.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 25.6, z: -0.99, r: 35.2, estimated: false }  # 긴문맥
  instruction: { s: 47.9, z: -0.1, r: 48.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Cogito v2.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Cogito v2.1

Deep Cogito · Open · Large(671B) · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 지시 따르기
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 52.8 | +0.19 | 실측 | [[gpqa-diamond]] 76.7677%×0.4, [[humanitys-last-exam]] 12.0019%×0.3 |
| 추론 | 46.7 | -0.22 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 76.7677%×1.0, [[humanitys-last-exam]] 12.0019%×1.0 |
| 코딩 | 42.0 | -0.53 | 실측 | [[terminal-bench]] 16.6667%×0.5 |
| 에이전트 | 38.5 | -0.77 | 실측 | [[terminal-bench]] 16.6667%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 35.2 | -0.99 | 실측 | [[aa-lcr]] 22.6667%×1.0 |
| 지시 따르기 | 48.4 | -0.1 | 실측 | [[ifbench]] 46.2585%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
