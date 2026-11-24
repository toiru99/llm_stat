---
type: Model
title: gpt-oss-120b (low)
creator: OpenAI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.172
output_speed_tps: 180.267915407632
context_window: 131072
status: current
size_class: Medium
params_b: 117
is_reasoning: true
radar:
  knowledge: { s: 40.7, z: -0.29, r: 45.6, estimated: false }  # 전문 지식
  reasoning: { s: 24.3, z: -0.54, r: 41.9, estimated: false }  # 추론
  coding: { s: 8.0, z: -1.11, r: 33.3, estimated: false }  # 코딩
  agentic: { s: 21.1, z: -0.92, r: 36.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 51.9, z: -0.18, r: 47.3, estimated: false }  # 긴문맥
  instruction: { s: 64.9, z: 0.6, r: 59.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — gpt-oss-120b (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# gpt-oss-120b (low)

OpenAI · Open · Medium(117B) · 컨텍스트 131k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.125 · 출력 $0.595 · 혼합 $0.172/1M · 180.267915407632 t/s · TTFT 1.1582362871126701s · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 45.6 | -0.29 | 실측 | [[gpqa-diamond]] 67.1717%×0.4, [[humanitys-last-exam]] 5.88508%×0.3 |
| 추론 | 41.9 | -0.54 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 67.1717%×1.0, [[humanitys-last-exam]] 5.88508%×1.0 |
| 코딩 | 33.3 | -1.11 | 실측 | [[terminal-bench]] 5.30303%×0.5 |
| 에이전트 | 36.2 | -0.92 | 실측 | [[gdpval]] 179.12 Elo×1.0, [[tau2-bench]] 45.0292%×1.0, [[tau3-banking]] 2.8866%×1.0, [[terminal-bench]] 5.30303%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.3 | -0.18 | 실측 | [[aa-lcr]] 46%×1.0 |
| 지시 따르기 | 59.0 | +0.6 | 실측 | [[ifbench]] 58.2993%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
