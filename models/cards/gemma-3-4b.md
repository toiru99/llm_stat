---
type: Model
title: Gemma 3 4B
creator: Google
license: Open
intelligence_index: None
price_blended_usd_1m: 0
output_speed_tps: 77.1036739655078
context_window: 128000
status: past
size_class: Tiny
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 15.2, z: -1.55, r: 26.8, estimated: false }  # 전문 지식
  reasoning: { s: 9.4, z: -1.29, r: 30.6, estimated: false }  # 추론
  coding: { s: 1.1, z: -1.32, r: 30.2, estimated: false }  # 코딩
  agentic: { s: 2.2, z: -1.48, r: 27.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 20.6, z: -2.6, r: 11.1, estimated: false }  # 멀티모달
  long_context: { s: 7.5, z: -1.37, r: 29.5, estimated: false }  # 긴문맥
  instruction: { s: 22.7, z: -1.3, r: 30.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 3 4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# Gemma 3 4B

Google · Open · Tiny · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 지시 따르기
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · 77.1036739655078 t/s · TTFT 1.43581480463987s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 26.8 | -1.55 | 실측 | [[gpqa-diamond]] 29.0909090909091%×0.4, [[humanitys-last-exam]] 5.29%×0.3 |
| 추론 | 30.6 | -1.29 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 29.0909090909091%×1.0, [[humanitys-last-exam]] 5.29%×1.0 |
| 코딩 | 30.2 | -1.32 | 실측 | [[terminal-bench]] 0.757575757575758%×0.5 |
| 에이전트 | 27.8 | -1.48 | 실측 | [[tau2-bench]] 4.97076023391813%×1.0, [[tau3-banking]] 0.412371134020619%×1.0, [[terminal-bench]] 0.757575757575758%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 11.1 | -2.6 | 실측 | [[mmmu-pro]] 29.942196531791897%×1.0 |
| 긴문맥 | 29.5 | -1.37 | 실측 | [[aa-lcr]] 6.66666666666667%×1.0 |
| 지시 따르기 | 30.4 | -1.3 | 실측 | [[ifbench]] 28.2993197278912%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
