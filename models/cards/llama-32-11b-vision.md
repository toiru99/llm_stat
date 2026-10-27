---
type: Model
title: Llama 3.2 11B (Vision)
creator: Meta
license: Open
intelligence_index: 5.0
price_blended_usd_1m: 0.345
output_speed_tps: 29.0
context_window: 128000
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 14.4, z: -1.33, r: 30.1, estimated: false }  # 전문 지식
  reasoning: { s: 7.4, z: -1.35, r: 29.8, estimated: false }  # 추론
  coding: { s: 1.5, z: -1.23, r: 31.5, estimated: false }  # 코딩
  agentic: { s: 1.5, z: -1.15, r: 32.8, estimated: false }  # 에이전트
  trust: { s: 16.5, z: -0.49, r: 42.7, estimated: false }  # 신뢰성
  multimodal: { s: 19.2, z: -2.65, r: 10.2, estimated: false }  # 멀티모달
  long_context: { s: 14.6, z: -1.15, r: 32.7, estimated: false }  # 긴문맥
  instruction: { s: 25.4, z: -1.24, r: 31.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.2 11B (Vision)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Llama 3.2 11B (Vision)

Meta · Open · Small · 컨텍스트 128k · 종합지능 **5.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $0.34 · 출력 $0.34 · 혼합 $0.345/1M · 29.0 t/s · TTFT 1.34s · 128k ctx` · 가성비 14.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 30.1 | -1.33 | 실측 | [[aa-omniscience]] 11.0%×1.0, [[gpqa-diamond]] 22.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 29.8 | -1.35 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 22.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 31.5 | -1.23 | 실측 | [[terminal-bench]] 1.0%×0.5 |
| 에이전트 | 32.8 | -1.15 | 실측 | [[terminal-bench]] 1.0%×1.0 |
| 신뢰성 | 42.7 | -0.49 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | 10.2 | -2.65 | 실측 | [[mmmu-pro]] 29.0%×1.0 |
| 긴문맥 | 32.7 | -1.15 | 실측 | [[aa-lcr]] 13.0%×1.0 |
| 지시 따르기 | 31.3 | -1.24 | 실측 | [[ifbench]] 30.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
