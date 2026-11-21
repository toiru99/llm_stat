---
type: Model
title: Qwen3 VL 235B A22B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.294
output_speed_tps: 29.1748616277704
context_window: 262144
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 43.8, z: -0.17, r: 47.5, estimated: false }  # 전문 지식
  reasoning: { s: 26.2, z: -0.46, r: 43.1, estimated: false }  # 추론
  coding: { s: 10.3, z: -1.01, r: 34.9, estimated: false }  # 코딩
  agentic: { s: 22.9, z: -0.76, r: 38.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 70.8, z: -0.03, r: 49.5, estimated: false }  # 멀티모달
  long_context: { s: 36.8, z: -0.5, r: 42.5, estimated: false }  # 긴문맥
  instruction: { s: 42.9, z: -0.46, r: 43.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 VL 235B A22B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# Qwen3 VL 235B A22B

Alibaba · Open · Large · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 멀티모달, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.215 · 출력 $1.39 · 혼합 $0.294/1M · 29.1748616277704 t/s · TTFT 2.65497639668326s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.5 | -0.17 | 실측 | [[gpqa-diamond]] 71.2121212121212%×0.4, [[humanitys-last-exam]] 6.62650602409639%×0.3 |
| 추론 | 43.1 | -0.46 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 71.2121212121212%×1.0, [[humanitys-last-exam]] 6.62650602409639%×1.0 |
| 코딩 | 34.9 | -1.01 | 실측 | [[terminal-bench]] 6.81818181818182%×0.5 |
| 에이전트 | 38.6 | -0.76 | 실측 | [[tau2-bench]] 35.0877192982456%×1.0, [[terminal-bench]] 6.81818181818182%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 49.5 | -0.03 | 실측 | [[mmmu-pro]] 67.5722543352601%×1.0 |
| 긴문맥 | 42.5 | -0.5 | 실측 | [[aa-lcr]] 32.6666666666667%×1.0 |
| 지시 따르기 | 43.1 | -0.46 | 실측 | [[ifbench]] 42.653061224489804%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
