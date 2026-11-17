---
type: Model
title: Llama 3.2 11B (Vision)
creator: Meta
license: Open
intelligence_index: None
price_blended_usd_1m: 0.345
output_speed_tps: 21.465348392866932
context_window: 128000
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 10.8, z: -1.76, r: 23.6, estimated: false }  # 전문 지식
  reasoning: { s: 6.8, z: -1.41, r: 28.8, estimated: false }  # 추론
  coding: { s: 1.1, z: -1.31, r: 30.3, estimated: false }  # 코딩
  agentic: { s: 7.9, z: -1.27, r: 30.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 19.8, z: -2.63, r: 10.5, estimated: false }  # 멀티모달
  long_context: { s: 14.3, z: -1.16, r: 32.6, estimated: false }  # 긴문맥
  instruction: { s: 25.7, z: -1.17, r: 32.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.2 11B (Vision)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Llama 3.2 11B (Vision)

Meta · Open · Small · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $0.345 · 출력 $0.345 · 혼합 $0.345/1M · 21.465348392866932 t/s · TTFT 4.089211847600901s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 23.6 | -1.76 | 실측 | [[gpqa-diamond]] 22.1212121212121%×0.4, [[humanitys-last-exam]] 5.53%×0.3 |
| 추론 | 28.8 | -1.41 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 22.1212121212121%×1.0, [[humanitys-last-exam]] 5.53%×1.0 |
| 코딩 | 30.3 | -1.31 | 실측 | [[terminal-bench]] 0.757575757575758%×0.5 |
| 에이전트 | 30.9 | -1.27 | 실측 | [[tau2-bench]] 14.619883040935699%×1.0, [[terminal-bench]] 0.757575757575758%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 10.5 | -2.63 | 실측 | [[mmmu-pro]] 29.3063583815029%×1.0 |
| 긴문맥 | 32.6 | -1.16 | 실측 | [[aa-lcr]] 12.666666666666702%×1.0 |
| 지시 따르기 | 32.5 | -1.17 | 실측 | [[ifbench]] 30.408163265306097%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
