---
type: Model
title: Llama 3.2 11B (Vision)
creator: Meta
license: Open
intelligence_index: 3.0
price_blended_usd_1m: 0.36
output_speed_tps: 58.0
context_window: 128000
status: current
size_class: Small
params_b: 11
is_reasoning: false
radar:
  knowledge: { s: 13.5, z: -1.31, r: 30.4, estimated: false }  # 전문 지식
  reasoning: { s: 7.3, z: -1.38, r: 29.2, estimated: false }  # 추론
  coding: { s: 12.7, z: -1.41, r: 28.8, estimated: false }  # 코딩
  agentic: { s: 8.3, z: -1.09, r: 33.7, estimated: false }  # 에이전트
  trust: { s: 20.0, z: -0.37, r: 44.5, estimated: false }  # 신뢰성
  multimodal: { s: 20.3, z: -2.46, r: 13.2, estimated: false }  # 멀티모달
  long_context: { s: 15.8, z: -0.98, r: 35.4, estimated: false }  # 긴문맥
  instruction: { s: 25.4, z: -1.12, r: 33.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.2 11B (Vision)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-18
timestamp: 2026-07-18T00:00:00Z
---

# Llama 3.2 11B (Vision)

Meta · Open · Small(11B) · 컨텍스트 128k · 종합지능 **3.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $0.36 · 출력 $0.36 · 혼합 $0.36/1M · 58.0 t/s · TTFT 0.58s · 128k ctx` · 가성비 8.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 30.4 | -1.31 | 실측 | [[aa-omniscience]] 10.0%×1.0, [[gpqa-diamond]] 22.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 29.2 | -1.38 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 22.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 28.8 | -1.41 | 실측 | [[scicode]] 11.0%×1.0, [[terminal-bench]] 1.0%×0.5 |
| 에이전트 | 33.7 | -1.09 | 실측 | [[tau2-bench]] 15.0%×1.0, [[terminal-bench]] 1.0%×1.0 |
| 신뢰성 | 44.5 | -0.37 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | 13.2 | -2.46 | 실측 | [[mmmu-pro]] 29.0%×1.0 |
| 긴문맥 | 35.4 | -0.98 | 실측 | [[aa-lcr]] 12.0%×1.0 |
| 지시 따르기 | 33.2 | -1.12 | 실측 | [[ifbench]] 30.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
